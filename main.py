from fastapi import FastAPI, HTTPException
from mocks.orders import order
from mocks.stock import stock
from datetime import datetime
from pydantic import BaseModel
from typing import List

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Bienvenido a la API"}

# Endpoint para agregar un "round" y actualizar la orden y el stock
class RoundItem(BaseModel):
    name: str
    quantity: int

class RoundRequest(BaseModel):
    round_items: List[RoundItem]

# Función para actualizar el stock
def update_stock(round_items: List[RoundItem]):
    for order_item in round_items:
        # Buscar la cerveza en el stock
        beer = next((beer for beer in stock["beers"] if beer["name"] == order_item.name), None)
        if beer is None:
            raise HTTPException(status_code=404, detail=f"Beer {order_item.name} not found in stock.")
        
        # Verificar que haya suficiente cantidad en el stock
        if beer["quantity"] < order_item.quantity:
            raise HTTPException(status_code=400, detail=f"Not enough stock for {order_item.name}.")
        
        # Reducir la cantidad del stock
        beer["quantity"] -= order_item.quantity
        
        # Actualizamos la fecha de la última actualización del stock
        stock["last_updated"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Función para agregar un nuevo "round" a la orden
def add_round_to_order(round_items: List[RoundItem]):
    round_data = {
        "created": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "items": round_items
    }
    order["rounds"].append(round_data)
    
    # Actualizamos el subtotal de la orden (esto depende de los items agregados en el round)
    for item in round_items:
        order["subtotal"] += item.quantity * next(beer for beer in stock["beers"] if beer["name"] == item.name)["price"]

    # Actualizamos la propiedad items de la orden
    for round_item in round_items:
        # Buscar si la cerveza ya está en order["items"]
        existing_item = next((item for item in order["items"] if item["name"] == round_item.name), None)
        
        if existing_item:
            existing_item["total"] += round_item.quantity  # Sumar cantidad si ya existe
        else:
            # Agregar nuevo item con estructura correcta
            print()
            order["items"].append({
                "name": round_item.name,
                "price_per_unit": next(beer for beer in stock["beers"] if beer["name"] == round_item.name)["price"],  # Puedes modificarlo si tienes el precio real
                "total": round_item.quantity
            })
    
    # Actualizamos los impuestos y descuentos (puedes hacer esto según tu lógica de negocio)
    order["taxes"] = order["subtotal"] * 0.1  # Ejemplo: 10% de impuestos
    order["discounts"] = 0  # Aquí puedes agregar lógica para descuentos

    # Finalmente, actualizamos el total
    # order["total"] = order["subtotal"] + order["taxes"] - order["discounts"]

@app.post("/order/round")
def create_round(round_request: RoundRequest):
    # Primero actualizamos el stock según los items en el round
    update_stock(round_request.round_items)
    
    # Luego agregamos el nuevo "round" a la orden
    add_round_to_order(round_request.round_items)
    
    # Retornamos el estado actualizado de la orden y el stock
    return {"message": "Round added successfully", "order": order, "updated_stock": stock}

@app.get("/order/")
def get_order():
    return order

@app.get("/stock/")
def get_stock():
    return stock

# Creamos el modelo para los datos de la cerveza
class Beer(BaseModel):
    name: str
    price: float
    quantity: int

@app.post("/stock/beers/")
def add_beer(beer: Beer):
    # Verificamos si la cerveza ya existe en el stock
    for existing_beer in stock["beers"]:
        if existing_beer["name"].lower() == beer.name.lower():
            raise HTTPException(status_code=400, detail="La cerveza ya existe en el stock")

    # Si no existe, agregamos la nueva cerveza
    new_beer = {
        "name": beer.name,
        "price": beer.price,
        "quantity": beer.quantity
    }
    stock["beers"].append(new_beer)
    stock["last_updated"] = "2024-09-10 12:00:00"  # Puedes actualizar la fecha si lo deseas
    return {"message": "Cerveza añadida exitosamente", "beer": new_beer}

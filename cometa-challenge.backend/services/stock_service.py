from fastapi import HTTPException
from datetime import datetime
from mocks.stock import stock
from models.round import RoundItem
from models.stock import Beer

def update_stock(round_items: list[RoundItem]):
    for order_item in round_items:
        beer = next((beer for beer in stock["beers"] if beer["name"] == order_item.name), None)
        if beer is None:
            raise HTTPException(status_code=404, detail=f"Beer {order_item.name} not found in stock.")
        
        if beer["quantity"] < order_item.quantity:
            raise HTTPException(status_code=400, detail=f"Not enough stock for {order_item.name}.")
        
        beer["quantity"] -= order_item.quantity
        stock["last_updated"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def add_beer_to_stock(beer: Beer):
    for existing_beer in stock["beers"]:
        if existing_beer["name"].lower() == beer.name.lower():
            raise HTTPException(status_code=400, detail="La cerveza ya existe en el stock")

    new_beer = {
        "name": beer.name,
        "price": beer.price,
        "quantity": beer.quantity
    }
    stock["beers"].append(new_beer)
    stock["last_updated"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return new_beer

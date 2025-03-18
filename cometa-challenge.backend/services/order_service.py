from datetime import datetime
from mocks.order import order
from mocks.stock import stock
from models.round import RoundItem

def add_round_to_order(round_items: list[RoundItem]):
    round_data = {
        "created": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "items": round_items
    }
    order["rounds"].append(round_data)

    # Actualizar subtotal y items de la orden
    for round_item in round_items:
        beer = next(beer for beer in stock["beers"] if beer["name"] == round_item.name)
        order["subtotal"] += round_item.quantity * beer["price"]

        existing_item = next((item for item in order["items"] if item["name"] == round_item.name), None)
        if existing_item:
            existing_item["total"] += round_item.quantity
        else:
            order["items"].append({
                "name": round_item.name,
                "price_per_unit": beer["price"],
                "total": round_item.quantity
            })

    order["taxes"] = order["subtotal"] * 0.1  # 10% de impuestos
    order["discounts"] = 0

from pydantic import BaseModel
from typing import List

class OrderItem(BaseModel):
    name: str
    price_per_unit: float
    total: int

class Order(BaseModel):
    rounds: List[dict]
    items: List[OrderItem]
    subtotal: float
    taxes: float
    discounts: float

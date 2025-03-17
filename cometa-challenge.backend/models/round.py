from pydantic import BaseModel
from typing import List

class RoundItem(BaseModel):
    name: str
    quantity: int

class RoundRequest(BaseModel):
    round_items: List[RoundItem]
from fastapi import APIRouter
from models.round import RoundRequest
from services.order_service import add_round_to_order
from services.stock_service import update_stock
from mocks.order import order

router = APIRouter()

@router.post("/order/round")
def create_round(round_request: RoundRequest):
    update_stock(round_request.round_items)
    add_round_to_order(round_request.round_items)
    return {"message": "Round added successfully", "order": order}

@router.get("/order/")
def get_order():
    return order

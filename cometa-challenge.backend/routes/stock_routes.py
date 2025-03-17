from fastapi import APIRouter
from models.stock import Beer
from services.stock_service import add_beer_to_stock
from mocks.stock import stock

router = APIRouter()

@router.get("/stock/")
def get_stock():
    return stock

@router.post("/stock/beers/")
def add_beer(beer: Beer):
    new_beer = add_beer_to_stock(beer)
    return {"message": "Cerveza añadida exitosamente", "beer": new_beer}

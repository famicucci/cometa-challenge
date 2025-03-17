from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.order_routes import router as order_router
from routes.stock_routes import router as stock_router

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrar las rutas
app.include_router(order_router)
app.include_router(stock_router)

@app.get("/")
def read_root():
    return {"message": "Bienvenido a la API"}

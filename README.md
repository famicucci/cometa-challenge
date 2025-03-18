# Cometa Challenge

Este es un proyecto fullstack que utiliza **FastAPI** para el backend y **React** para el frontend.

## ⚡ Instalación y Configuración

### Clonar el repositorio

```sh
git clone https://github.com/famicucci/cometa-challenge.git
cd cometa-challenge
```

### Instalación

```sh
npm run install:all
npm start
```

## 📂 Estructura del Proyecto

```plaintext
cometa-challenge/
├── cometa-challenge.frontend/
│   └── app/
│       ├── adapters/
│       ├── components/
│       ├── domain/
│       ├── redux/
│       └── services/
└── cometa-challenge.backend/
    ├── mocks/
    ├── models/
    ├── routes/
    ├── services/
    └── main.py

```

## Endpoints del Backend

- **GET** `http://127.0.0.1:8000/order/` - getOrder.
- **GET** `http://127.0.0.1:8000/stock/` - getStock.
- **POST** `http://127.0.0.1:8000/stock/beers/` - addBeer.
- **POST** `http://127.0.0.1:8000/order/round` - addRoundToOrder.

import React from "react";
import { Typography } from "../designSystemComponents/Typography";
import { OrderProps } from "./types";
import { Items } from "./Items";

const Order = ({ order }: OrderProps) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 mb-2">
        <Typography variant="body big" bold>
          Detalle de Orden
        </Typography>
        <Typography variant="body big">
          {order.paid ? "Pago".toUpperCase() : "No pago".toUpperCase()}
        </Typography>
      </div>
      <Items order={order} />
    </div>
  );
};

export default Order;

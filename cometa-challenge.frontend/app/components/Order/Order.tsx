"use client";
import { getOrderThunk } from "@/app/redux/order/asyncThunk";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import React, { useEffect } from "react";
import { Typography } from "../designSystemComponents/Typography";

const Order = () => {
  const dispatch = useAppDispatch();
  const { order, status } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderThunk());
  }, []);

  return (
    <>
      {order ? (
        <div className="flex justify-between items-center gap-5">
          <Typography variant="body big" bold>
            Detalle de Orden
          </Typography>
          <Typography variant="body big">
            {order.paid ? "Pago" : "No pago"}
          </Typography>
          <Typography variant="body big">{order.getTotal()}</Typography>
        </div>
      ) : (
        <Typography variant="body big">
          No hay una orden para mostrar
        </Typography>
      )}
    </>
  );
};

export default Order;

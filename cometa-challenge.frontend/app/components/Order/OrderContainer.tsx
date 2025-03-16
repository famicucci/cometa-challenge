"use client";
import { getOrderThunk } from "@/app/redux/order/asyncThunk";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import React, { useEffect } from "react";
import { Typography } from "../designSystemComponents/Typography";
import Order from "./Order";

const OrderContainer = () => {
  const dispatch = useAppDispatch();
  const { order, status } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderThunk());
  }, []);

  return (
    <>
      {order ? (
        <Order order={order} />
      ) : status === "gettingOrder" || "iddle " ? (
        <Typography variant="body big">Cargando...</Typography>
      ) : (
        <Typography variant="body big">
          No hay una orden para mostrar
        </Typography>
      )}
    </>
  );
};

export default OrderContainer;

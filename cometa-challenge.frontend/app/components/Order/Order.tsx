"use client";
import { getOrderThunk } from "@/app/redux/order/asyncThunk";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import React, { useEffect } from "react";

const Order = () => {
  const dispatch = useAppDispatch();
  const { order, status } = useAppSelector((state) => state.order);
  console.log(order, status);

  useEffect(() => {
    dispatch(getOrderThunk());
  }, []);

  return <div>Order</div>;
};

export default Order;

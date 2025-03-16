"use client";
import { useAppSelector } from "@/app/redux/store";
import React from "react";

const Order = () => {
  const { order, status } = useAppSelector((state) => state.order);
  console.log(order, status);
  return <div>Order</div>;
};

export default Order;

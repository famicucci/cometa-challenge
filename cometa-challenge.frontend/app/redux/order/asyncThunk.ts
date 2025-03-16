import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppError } from "./types";
import { getOrder } from "@/app/services/getOrder";
import { orderAdapter } from "@/app/adapters/orderAdapter";
import { OrderClass } from "@/app/domain/order";

export const getOrderThunk = createAsyncThunk<
  OrderClass,
  void,
  { rejectValue: AppError }
>("order/getStockPoints", async (_, { rejectWithValue }) => {
  const order = await getOrder();
  const adaptedOrder = orderAdapter(order);

  return adaptedOrder;
});

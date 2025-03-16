import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppError, Order } from "./types";
import { getOrder } from "@/app/services/getOrder";

export const getOrderThunk = createAsyncThunk<
  Order,
  void,
  { rejectValue: AppError }
>("stockPoints/getStockPoints", async (_, { rejectWithValue }) => {
  const order = await getOrder();
  console.log(order);

  //   const adaptedOrder = orderAdapter(products);

  return {
    // products: adaptedStockPoints,
  } as any;
});

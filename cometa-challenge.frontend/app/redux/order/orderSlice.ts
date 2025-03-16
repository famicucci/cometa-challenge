import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
// import { AppError, ProductsHandler } from "./types";
// import { getProductsThunk } from "./asyncThunks";

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getOrderThunk.pending, (state) => {
    //   state.status = "gettingOrder";
    // });
    // builder.addCase(
    //   getOrderThunk.fulfilled,
    //   (state, action: PayloadAction<Order>) => {
    //     state.products = action.payload.products;
    //     state.status = "succeeded";
    //   }
    // );
    // builder.addCase(
    //   getOrderThunk.rejected,
    //   (state, action: PayloadAction<AppError | undefined>) => {
    //     state.error = action.payload;
    //     state.status = "failed";
    //   }
    // );
  },
});

export default orderSlice.reducer;

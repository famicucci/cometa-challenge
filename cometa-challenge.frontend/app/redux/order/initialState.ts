import { OrderState } from "./types";

export const initialState: OrderState = {
  order: null,
  status: "idle",
  error: undefined,
};

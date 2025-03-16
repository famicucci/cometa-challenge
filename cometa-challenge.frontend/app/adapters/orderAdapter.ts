import { OrderClass } from "../domain/order";
import { OrderResponse } from "../services/types/order";

export const orderAdapter = (orderResponse: OrderResponse): OrderClass => {
  return new OrderClass(
    orderResponse.created,
    orderResponse.paid,
    orderResponse.subtotal,
    orderResponse.taxes,
    orderResponse.discounts,
    orderResponse.items,
    orderResponse.rounds
  );
};

import { cometaChallengeRequest } from "./cometaChallengeRequest";
import { OrderResponse } from "./types/order";

export const getOrder = async (): Promise<OrderResponse[]> => {
  return await cometaChallengeRequest("order", "GET");
};

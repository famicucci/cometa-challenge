export interface OrderResponse {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: OrderItem[];
  rounds: Round[];
}

interface OrderItem {
  name: string;
  price_per_unit: number;
  total: number;
}

interface Round {
  created: Date;
  items: RoundItem[];
}

interface RoundItem {
  name: string;
  quantity: number;
}

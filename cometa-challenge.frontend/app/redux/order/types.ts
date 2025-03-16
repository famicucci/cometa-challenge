export class AppError {
  name: string;
  message: string;
  statusCode: number;
  constructor(name: string, message: string, statusCode: number) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export interface OrderState {
  order: Order | null;
  status: "idle" | "succeeded" | "failed" | "gettingOrder" | "creatingRound";
  error: AppError | undefined;
}

export interface Order {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: OrderItem[];
  rounds: Round[];
}

export interface OrderItem {
  name: string;
  price_per_unit: number;
  total: number;
}

export interface Round {
  created: Date;
  items: RoundItem[];
}

export interface RoundItem {
  name: string;
  quantity: number;
}

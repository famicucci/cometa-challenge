export interface OrderItem {
  name: string;
  price_per_unit: number;
  total: number;
}

export interface RoundItem {
  name: string;
  quantity: number;
}

export interface Round {
  created: Date;
  items: RoundItem[];
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

export class OrderClass implements Order {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: OrderItem[];
  rounds: Round[];

  constructor(
    created: Date,
    paid: boolean,
    subtotal: number,
    taxes: number,
    discounts: number,
    items: OrderItem[],
    rounds: Round[]
  ) {
    this.created = created;
    this.paid = paid;
    this.subtotal = subtotal;
    this.taxes = taxes;
    this.discounts = discounts;
    this.items = items;
    this.rounds = rounds;
  }

  getTotal(): number {
    return this.subtotal + this.taxes - this.discounts;
  }
}

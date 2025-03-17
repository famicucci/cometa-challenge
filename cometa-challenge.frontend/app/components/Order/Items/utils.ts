import { OrderItem } from "@/app/domain/order";

export const columns = [
  {
    name: "Item",
    selector: (row: OrderItem) => row.name,
  },
  {
    name: "Precio",
    selector: (row: OrderItem) => row.price_per_unit,
  },
  {
    name: "Cant.",
    selector: (row: OrderItem) => row.total,
  },
  {
    name: "Total",
    selector: (row: OrderItem) =>
      `$ ${(row.price_per_unit * row.total).toFixed(2)}`,
  },
];

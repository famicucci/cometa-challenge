import { OrderItem } from "@/app/domain/order";

export const columns = [
  {
    name: "Item",
    selector: (row: OrderItem) => row.name,
    align: "left",
  },
  {
    name: "Precio",
    selector: (row: OrderItem) => `$ ${row.price_per_unit.toFixed(2)}`,
    align: "right",
  },
  {
    name: "Cant.",
    selector: (row: OrderItem) => row.total,
    align: "center",
  },
  {
    name: "Total",
    selector: (row: OrderItem) =>
      `$ ${(row.price_per_unit * row.total).toFixed(2)}`,
    align: "right",
  },
];

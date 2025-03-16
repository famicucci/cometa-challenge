import React from "react";
import { ItemsProps } from "./types";

const Items = ({ order }: ItemsProps) => {
  return (
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Item</th>
          <th className="border border-gray-400 px-4 py-2">Precio</th>
          <th className="border border-gray-400 px-4 py-2">Cant.</th>
          <th className="border border-gray-400 px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {order.items.length > 0 ? (
          <>
            {order.items.map((item) => (
              <tr key={item.name}>
                <td className="border border-gray-400 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-right">
                  $ {item.price_per_unit.toFixed(2)}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {item.total}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-right">
                  $ {(item.price_per_unit * item.total).toFixed(2)}
                </td>
              </tr>
            ))}
          </>
        ) : (
          "no hay items cargados"
        )}
      </tbody>
    </table>
  );
};

export default Items;

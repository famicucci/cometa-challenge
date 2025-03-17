import React from "react";
import { ItemsProps } from "./types";
import { Typography } from "../../designSystemComponents/Typography";

const Items = ({ order }: ItemsProps) => {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Item</th>
          <th className="border border-gray-300 px-4 py-2">Precio</th>
          <th className="border border-gray-300 px-4 py-2">Cant.</th>
          <th className="border border-gray-300 px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {order.items.length > 0 ? (
          <>
            {order.items.map((item) => (
              <tr key={item.name}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  $ {item.price_per_unit.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.total}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  $ {(item.price_per_unit * item.total).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                className="border border-gray-300 px-4 py-2 text-center bg-gray-100"
              >
                <div className="flex justify-between">
                  <Typography variant="body medium" bold>
                    Subtotal
                  </Typography>
                  <Typography variant="body medium">
                    $ {order.subtotal.toFixed(2)}
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="body medium" bold>
                    Tasas
                  </Typography>
                  <Typography variant="body medium">
                    $ {order.taxes.toFixed(2)}
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="body medium" bold>
                    Descuento
                  </Typography>
                  <Typography variant="body medium">
                    $ {order.discounts.toFixed(2)}
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="body medium" bold>
                    Subtotal
                  </Typography>
                  <Typography variant="body medium">
                    $ {order.getTotal().toFixed(2)}
                  </Typography>
                </div>
              </td>
            </tr>
          </>
        ) : (
          <tr>
            <td
              colSpan={4}
              className="border border-gray-300 px-4 py-2 text-center bg-gray-100"
            >
              no hay items cargados
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Items;

import React from "react";
import { ItemsProps } from "./types";
import { Typography } from "../../designSystemComponents/Typography";
import { columns } from "./utils";

const Items = ({ order }: ItemsProps) => {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((column) => (
            <th key={column.name} className="border border-gray-300 px-4 py-2">
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {order.items.length > 0 ? (
          <>
            {order.items.map((item) => (
              <tr key={item.name}>
                {columns.map((column) => (
                  <td
                    key={column.name}
                    className={`border border-gray-300 px-4 py-2 text-${column.align}`}
                  >
                    {column.selector(item)}
                  </td>
                ))}
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

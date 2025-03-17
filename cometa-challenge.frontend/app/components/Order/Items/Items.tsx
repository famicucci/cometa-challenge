import React, { useMemo } from "react";
import { ItemsProps } from "./types";
import { Typography } from "../../designSystemComponents/Typography";
import { columns } from "./utils";

const Items = ({ order }: ItemsProps) => {
  const priceDetails = useMemo(
    () => [
      { title: "Subtotal", amount: order.subtotal },
      { title: "Tasas", amount: order.taxes },
      { title: "Descuento", amount: order.discounts },
      { title: "Total", amount: order.getTotal() },
    ],
    []
  );

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
                {priceDetails.map((priceDetail) => (
                  <div key={priceDetail.title} className="flex justify-between">
                    <Typography variant="body medium" bold>
                      {priceDetail.title}
                    </Typography>
                    <Typography variant="body medium">
                      $ {priceDetail.amount.toFixed(2)}
                    </Typography>
                  </div>
                ))}
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

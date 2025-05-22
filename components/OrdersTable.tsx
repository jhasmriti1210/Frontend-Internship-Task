import { Order } from "../types/Order";
import classNames from "classnames";

const statusColor = {
  Pending: "bg-yellow-300",
  Preparing: "bg-orange-400",
  "Out for Delivery": "bg-blue-300",
  Delivered: "bg-green-300",
  Cancelled: "bg-red-400",
};

export default function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Pizza</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.pizza}</td>
              <td className="p-3">{order.quantity}</td>
              <td className="p-3">{order.date}</td>
              <td className="p-3">
                <span className={classNames("px-2 py-1 rounded text-sm text-white", statusColor[order.status])}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

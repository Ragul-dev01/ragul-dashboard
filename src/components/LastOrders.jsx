import { CalendarDays, MoreVertical } from "lucide-react";
import profile from "../assets/profile.png";

const orders = [
  {
    name: "Regina Cooper",
    order: "#790841",
    amount: "$2.500",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    name: "Robert Edwards",
    order: "#799894",
    amount: "$1.500",
    payment: "PayPal",
    date: "12.09.2019",
  },
  {
    name: "Gloria Mckinney",
    order: "#790857",
    amount: "$5.600",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    name: "Randall Fisher",
    order: "#790687",
    amount: "$2.850",
    payment: "PayPal",
    date: "12.09.2019",
  },
];

const transactions = [
  {
    name: "Devon Williamson",
    time: "08:00 AM",
    date: "19 August",
    amount: "+$1.400",
    type: "Payment",
    positive: true,
  },
  {
    name: "Debra Wilson",
    time: "09:45 AM",
    date: "19 August",
    amount: "-$850",
    type: "Refund",
    positive: false,
  },
  {
    name: "Judith Black",
    time: "10:15 AM",
    date: "20 August",
    amount: "+$2.050",
    type: "Payment",
    positive: true,
  },
  {
    name: "Philip Henry",
    time: "10:50 AM",
    date: "23 August",
    amount: "+$650",
    type: "Payment",
    positive: true,
  },
  {
    name: "Mitchell Cooper",
    time: "12:45 AM",
    date: "25 August",
    amount: "+$900",
    type: "Payment",
    positive: true,
  },
];

function LastOrders() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
      {/* Last Orders */}
      <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-gray-700">
            Last Orders
          </h2>

          <button className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-500">
            <CalendarDays size={14} />
            19 Aug – 25 Aug
          </button>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[600px] border-separate border-spacing-y-1.5 text-left">
            <thead>
              <tr className="text-[11px] text-gray-400">
                <th className="px-2 pb-2 font-normal">Customer Name</th>
                <th className="px-2 pb-2 font-normal">Order No.</th>
                <th className="px-2 pb-2 font-normal">Amount</th>
                <th className="px-2 pb-2 font-normal">Payment Type</th>
                <th className="px-2 pb-2 font-normal">Date</th>
                <th className="pb-2"></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.order}
                  className="bg-gray-50 text-xs text-gray-600"
                >
                  <td className="rounded-l-2xl px-2 py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={profile}
                        alt=""
                        className="h-6 w-6 shrink-0 rounded-full object-cover"
                      />
                      <span className="whitespace-nowrap">{order.name}</span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-2 py-3 text-gray-400">
                    {order.order}
                  </td>

                  <td className="whitespace-nowrap px-2 py-3">
                    {order.amount}
                  </td>

                  <td className="whitespace-nowrap px-2 py-3 text-gray-400">
                    {order.payment}
                  </td>

                  <td className="whitespace-nowrap px-2 py-3 text-gray-500">
                    {order.date}
                  </td>

                  <td className="rounded-r-2xl px-2 py-3">
                    <button
                      type="button"
                      aria-label={`More options for ${order.name}`}
                      className="text-gray-400 hover:text-gray-700"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Transactions */}
      <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-700">
            Transactions
          </h2>

          <button
            type="button"
            aria-label="Transaction options"
            className="text-xl leading-none text-gray-400 hover:text-gray-700"
          >
            ···
          </button>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={`${transaction.name}-${transaction.date}`}
              className="flex items-center gap-2"
            >
              <img
                src={profile}
                alt=""
                className="h-8 w-8 shrink-0 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-gray-700">
                  {transaction.name}
                </p>

                <p className="mt-1 whitespace-nowrap text-[10px] text-gray-400">
                  {transaction.time} — {transaction.date}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p
                  className={`text-xs font-medium ${
                    transaction.positive ? "text-green-500" : "text-red-400"
                  }`}
                >
                  {transaction.amount}
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  {transaction.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LastOrders;
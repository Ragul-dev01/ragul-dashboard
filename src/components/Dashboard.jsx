import {
  Download,
  CalendarDays,
  DollarSign,
  ChartNoAxesColumnIncreasing,
  UsersRound,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import LastOrders from "./LastOrders";

const summaryCards = [
  {
    title: "Total Income",
    amount: "$8.500",
    change: "50.8%",
    positive: true,
    icon: DollarSign,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    title: "Total Sales",
    amount: "3.500K",
    change: "10.5%",
    positive: false,
    icon: ChartNoAxesColumnIncreasing,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    title: "New Clients",
    amount: "2.500K",
    change: "24.9%",
    positive: true,
    icon: UsersRound,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
];

const incomeData = [
  { day: "Mon", income: 180, expense: 330 },
  { day: "Tue", income: 100, expense: 250 },
  { day: "Wed", income: 250, expense: 380 },
  { day: "Thu", income: 185, expense: 250 },
  { day: "Fri", income: 200, expense: 370 },
  { day: "Sat", income: 175, expense: 320 },
  { day: "Sun", income: 145, expense: 210 },
];

const analyticsData = [
  { day: "Mon", income: 0, expense: 0 },
  { day: "Tue", income: 110, expense: 65 },
  { day: "Wed", income: 80, expense: 140 },
  { day: "Thu", income: 190, expense: 85 },
  { day: "Fri", income: 105, expense: 175 },
  { day: "Sat", income: 250, expense: 120 },
  { day: "Sun", income: 320, expense: 90 },
];

function SummaryCard({ card }) {
  const Icon = card.icon;

  return (
    <div className="flex min-w-0 items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div className="min-w-0">
        <p className="mb-2 text-xs text-gray-400">{card.title}</p>

        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-semibold text-gray-700">
            {card.amount}
          </h3>

          <span
            className={`flex items-center gap-0.5 text-[10px] font-medium ${
              card.positive ? "text-green-500" : "text-red-500"
            }`}
          >
            {card.positive ? (
              <TrendingUp size={12} />
            ) : (
              <TrendingDown size={12} />
            )}

            {card.positive ? "+" : "↓"}
            {card.change}
          </span>
        </div>
      </div>

      <div
        className={`ml-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${card.iconBg}`}
      >
        <Icon size={28} className={card.iconColor} strokeWidth={2.5} />
      </div>
    </div>
  );
}

function StatisticsChart() {
  return (
    <section className="relative min-w-0 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-gray-700">Statistics</h3>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-500"
        >
          <CalendarDays size={14} />
          19 Aug – 25 Aug
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-between pb-8">
          {[400, 300, 200, 100, 0].map((value) => (
            <div key={value} className="flex items-center gap-3">
              <span className="w-5 text-right text-[9px] text-gray-400">
                {value}
              </span>

              <div className="h-px flex-1 bg-gray-100" />
            </div>
          ))}
        </div>

        <div className="relative ml-8 flex h-52 items-end justify-around pb-8">
          {incomeData.map((item) => (
            <div
              key={item.day}
              className="relative flex h-full flex-1 flex-col items-center justify-end"
            >
              <div className="flex h-full items-end gap-1">
                <div
                  className="w-2.5 rounded-full bg-green-600"
                  style={{ height: `${(item.income / 400) * 100}%` }}
                />

                <div
                  className="w-2.5 rounded-full bg-teal-400"
                  style={{ height: `${(item.expense / 400) * 100}%` }}
                />
              </div>

              <span className="absolute top-full mt-1 text-[9px] text-gray-400">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-5 text-[10px] text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Income
        </span>

        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-teal-400" />
          Expense
        </span>
      </div>

      {/* Statistics tooltip */}
      <div className="pointer-events-none absolute left-[35%] top-[28%] z-10 hidden rounded-xl bg-white px-4 py-3 text-xs shadow-lg sm:block">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            2.500
          </span>

          <span className="flex items-center gap-1 text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            1.200
          </span>
        </div>

        <p className="mt-1 text-center text-[10px] text-gray-400">
          23 August, 2020
        </p>
      </div>
    </section>
  );
}

function AnalyticsChart() {
  const width = 350;
  const height = 190;

  const createPoints = (key) =>
    analyticsData
      .map((item, index) => {
        const x = (index / (analyticsData.length - 1)) * width;
        const y = height - (item[key] / 350) * height;

        return `${x},${y}`;
      })
      .join(" ");

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-gray-700">Analytics</h3>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-500"
        >
          <CalendarDays size={14} />
          19 Aug – 25 Aug
        </button>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
            <TrendingUp size={13} />
          </span>
          $5.850
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            <TrendingDown size={13} />
          </span>
          $1.750
        </div>
      </div>

      <div className="relative overflow-hidden">
        <svg
          viewBox={`-5 -5 ${width + 10} ${height + 35}`}
          className="w-full"
          role="img"
          aria-label="Income and expense analytics line chart"
        >
          {[0, 1, 2, 3, 4].map((line) => (
            <line
              key={line}
              x1="0"
              y1={line * (height / 4)}
              x2={width}
              y2={line * (height / 4)}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
          ))}

          {analyticsData.map((item, index) => {
            const x = (index / (analyticsData.length - 1)) * width;

            return (
              <line
                key={item.day}
                x1={x}
                y1="0"
                x2={x}
                y2={height}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
            );
          })}

          <polygon
            points={`0,${height} ${createPoints("income")} ${width},${height}`}
            fill="#16a34a"
            opacity="0.08"
          />

          <polygon
            points={`0,${height} ${createPoints("expense")} ${width},${height}`}
            fill="#2dd4bf"
            opacity="0.12"
          />

          <polyline
            points={createPoints("income")}
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <polyline
            points={createPoints("expense")}
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {analyticsData.map((item, index) => {
            const x = (index / (analyticsData.length - 1)) * width;
            const yIncome = height - (item.income / 350) * height;
            const yExpense = height - (item.expense / 350) * height;

            return (
              <g key={item.day}>
                <circle
                  cx={x}
                  cy={yIncome}
                  r="3"
                  fill="white"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                />

                <circle
                  cx={x}
                  cy={yExpense}
                  r="3"
                  fill="white"
                  stroke="#2dd4bf"
                  strokeWidth="1.5"
                />

                <text
                  x={x}
                  y={height + 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#9ca3af"
                >
                  {item.day}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Analytics tooltip */}
        <div className="pointer-events-none absolute left-1/2 top-[25%] z-10 -translate-x-1/2 rounded-xl bg-white px-6 py-3 text-center shadow-lg">
          <p className="text-sm font-medium text-gray-600">$1.000</p>

          <p className="mt-1 whitespace-nowrap text-xs text-gray-400">
            22 August, 2019
          </p>
        </div>
      </div>
    </section>
  );
}

function SalesChart() {
  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">Sales</h3>

        <button
          type="button"
          className="text-gray-400"
          aria-label="Sales options"
        >
          ···
        </button>
      </div>

      <div className="flex justify-center py-3">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-teal-400 border-l-green-600 border-t-green-600">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700">3.500</p>
            <p className="text-xs text-gray-400">Total</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-xs text-gray-500">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Current Week
          </span>

          <span className="whitespace-nowrap">
            2.500 <span className="ml-2 text-green-500">↑ 8.8%</span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Last Week
          </span>

          <span className="whitespace-nowrap">
            1.000 <span className="ml-2 text-red-400">↓ 5.8%</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function HorizontalStatistics() {
  const bars = [
    { label: "25", income: 50, expense: 50 },
    { label: "24", income: 70, expense: 30 },
    { label: "23", income: 80, expense: 40 },
    { label: "22", income: 100, expense: 50 },
    { label: "21", income: 45, expense: 90 },
    { label: "20", income: 65, expense: 40 },
    { label: "19", income: 35, expense: 30 },
  ];

  const maxValue = 150;

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-gray-700">Statistics</h3>

        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Income
          </span>

          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Expense
          </span>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-500"
          >
            <CalendarDays size={14} />
            19 Aug – 25 Aug
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-8 right-0 flex justify-between">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((line) => (
            <div key={line} className="h-full w-px bg-gray-100" />
          ))}
        </div>

        <div className="relative space-y-4 py-2">
          {bars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs text-gray-400">
                {bar.label}
              </span>

              <div className="relative flex h-3 flex-1 items-center">
                <div className="absolute left-1/2 top-[-5px] h-6 w-px bg-gray-200" />

                <div className="flex h-full w-1/2 justify-end">
                  <div
                    className="h-full rounded-l-full bg-green-600"
                    style={{ width: `${(bar.income / maxValue) * 100}%` }}
                  />
                </div>

                <div className="h-full w-1/2">
                  <div
                    className="h-full rounded-r-full bg-teal-400"
                    style={{ width: `${(bar.expense / maxValue) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-8 mt-5 flex justify-between text-[9px] text-gray-400">
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
          <span>-100</span>
          <span>-200</span>
          <span>-300</span>
          <span>-400</span>
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-6">
      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-xl font-semibold text-gray-700">Overview</h1>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50"
            aria-label="Download dashboard"
          >
            <Download size={18} />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-xs text-gray-600 shadow-sm"
          >
            Last 7 days
            <CalendarDays size={14} />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <SummaryCard key={card.title} card={card} />
        ))}
      </div>

      {/* Statistics and Analytics */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <StatisticsChart />
        <AnalyticsChart />
      </div>

      {/* Sales and Horizontal Statistics */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[0.8fr_1.2fr]">
        <SalesChart />
        <HorizontalStatistics />
      </div>

      {/* Last Orders and Transactions */}
      <LastOrders />
    </div>
  );
}

export default Dashboard;

import {
  CalendarDays,
  ChevronDown,
  Download,
  DollarSign,
  ChartNoAxesColumnIncreasing,
  UsersRound,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Globe,
} from "lucide-react";

import chromeLogo from "../assets/chrome.png";
import appleLogo from "../assets/apple.png";
import australiaFlag from "../assets/australia.png";
import googleLogo from "../assets/google.png";

const summaryCards = [
  {
    title: "Total Profit",
    amount: "$12.500",
    change: "50.8%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Total Sales",
    amount: "30.800K",
    change: "10.5%",
    positive: false,
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "New Users",
    amount: "6.300K",
    change: "24.9%",
    positive: true,
    icon: UsersRound,
  },
];

const barData = [
  { day: "Mon", sales: 110, expenses: 150, profit: 45 },
  { day: "Tue", sales: 85, expenses: 200, profit: 25 },
  { day: "Wed", sales: 190, expenses: 140, profit: 60 },
  { day: "Thu", sales: 160, expenses: 130, profit: 35 },
  { day: "Fri", sales: 180, expenses: 230, profit: 40 },
  { day: "Sat", sales: 110, expenses: 150, profit: 25 },
  { day: "Sun", sales: 75, expenses: 90, profit: 20 },
];

const lineData = [
  { day: "Mon", sales: 0, expenses: 0 },
  { day: "Tue", sales: 55, expenses: 35 },
  { day: "Wed", sales: 40, expenses: 65 },
  { day: "Thu", sales: 95, expenses: 40 },
  { day: "Fri", sales: 55, expenses: 85 },
  { day: "Sat", sales: 115, expenses: 60 },
  { day: "Sun", sales: 140, expenses: 45 },
];

const trafficCards = [
  {
    title: "Top Browser",
    name: "Chrome",
    sessions: "2500",
    type: "chrome",
  },
  {
    title: "Top Platform",
    name: "Mac OS",
    sessions: "2200",
    type: "apple",
  },
  {
    title: "Top Country",
    name: "Australia",
    sessions: "4550",
    type: "country",
  },
  {
    title: "Top Search Engine",
    name: "Google",
    sessions: "3100",
    type: "google",
  },
];

function DateSelector({ children = "19 Aug – 25 Aug" }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-2 text-[10px] text-gray-500 hover:bg-gray-50"
    >
      <CalendarDays size={12} />
      <span>{children}</span>
      <ChevronDown size={11} />
    </button>
  );
}

function SummaryCard({ card }) {
  const Icon = card.icon;

  return (
    <section className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div className="min-w-0">
        <p className="text-[10px] text-gray-400">{card.title}</p>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-700">
            {card.amount}
          </h2>

          <span
            className={`text-[9px] font-medium ${
              card.positive ? "text-green-500" : "text-red-400"
            }`}
          >
            {card.positive ? "↑" : "↓"} {card.change}
          </span>
        </div>
      </div>

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50">
        <Icon size={24} className="text-teal-400" strokeWidth={2.5} />
      </div>
    </section>
  );
}

function StatisticsChart() {
  const max = 420;

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xs font-semibold text-gray-700">Statistics</h2>
        <DateSelector />
      </div>

      <div className="relative flex h-[180px]">
        <div className="flex w-7 shrink-0 flex-col justify-between pb-5 text-[8px] text-gray-400">
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        <div className="relative flex min-w-0 flex-1 items-end justify-around border-b border-gray-100 pb-5">
          {[0, 1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="pointer-events-none absolute left-0 right-0 border-t border-gray-100"
              style={{ bottom: `${20 + line * 20}%` }}
            />
          ))}

          {barData.map((item) => (
            <div
              key={item.day}
              className="relative z-10 flex h-full flex-1 items-end justify-center gap-0.5"
            >
              <div
                className="w-2 rounded-t-full bg-green-600 sm:w-2.5"
                style={{ height: `${(item.sales / max) * 100}%` }}
              />

              <div
                className="w-2 rounded-t-full bg-teal-400 sm:w-2.5"
                style={{ height: `${(item.expenses / max) * 100}%` }}
              />

              <div
                className="w-2 rounded-t-full bg-orange-200 sm:w-2.5"
                style={{ height: `${(item.profit / max) * 100}%` }}
              />

              <span className="absolute top-full mt-2 text-[8px] text-gray-400">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-end gap-3 text-[9px] text-gray-400">
        {[
          ["bg-green-600", "Sales"],
          ["bg-teal-400", "Expenses"],
          ["bg-orange-200", "Profit"],
        ].map(([color, label]) => (
          <span key={label} className="flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}

function AnalyticsChart() {
  const width = 350;
  const height = 150;

  const getPoints = (key) =>
    lineData
      .map((item, index) => {
        const x = (index / (lineData.length - 1)) * width;
        const y = height - (item[key] / 150) * height;
        return `${x},${y}`;
      })
      .join(" ");

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xs font-semibold text-gray-700">Analytics</h2>
        <DateSelector />
      </div>

      <div className="mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2 text-[10px] text-gray-600">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
            <TrendingUp size={12} />
          </span>
          $5.850
        </div>

        <div className="flex items-center gap-2 text-[10px] text-gray-600">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            <TrendingDown size={12} />
          </span>
          $1.750
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`-5 -5 ${width + 10} ${height + 25}`}
          className="w-full overflow-visible"
          role="img"
          aria-label="Sales and expenses line chart"
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

          {lineData.map((item, index) => {
            const x = (index / (lineData.length - 1)) * width;

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
            points={`0,${height} ${getPoints("sales")} ${width},${height}`}
            fill="#16a34a"
            opacity="0.08"
          />

          <polygon
            points={`0,${height} ${getPoints("expenses")} ${width},${height}`}
            fill="#2dd4bf"
            opacity="0.08"
          />

          <polyline
            points={getPoints("sales")}
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <polyline
            points={getPoints("expenses")}
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {lineData.map((item, index) => {
            const x = (index / (lineData.length - 1)) * width;
            const salesY = height - (item.sales / 150) * height;
            const expensesY = height - (item.expenses / 150) * height;

            return (
              <g key={item.day}>
                <circle cx={x} cy={salesY} r="2.5" fill="#16a34a" />
                <circle cx={x} cy={expensesY} r="2.5" fill="#2dd4bf" />

                <text
                  x={x}
                  y={height + 16}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#9ca3af"
                >
                  {item.day}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="pointer-events-none absolute left-[38%] top-[12%] rounded-lg bg-white px-3 py-2 text-center shadow-lg">
          <p className="text-[10px] text-gray-600">$1.000</p>
          <p className="mt-0.5 text-[8px] text-gray-400">
            22 August, 2019
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-3 text-[9px] text-gray-400">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
          Sales
        </span>

        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          Expenses
        </span>
      </div>
    </section>
  );
}

function TrafficCard({ card }) {
  const logos = {
    chrome: { src: chromeLogo, alt: "Google Chrome" },
    apple: { src: appleLogo, alt: "Apple" },
    country: { src: australiaFlag, alt: "Australia flag" },
    google: { src: googleLogo, alt: "Google" },
  };

  const logo = logos[card.type];

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-7 w-7 shrink-0 object-contain"
          />

          <div className="min-w-0">
            <p className="text-[9px] text-gray-400">{card.title}</p>
            <p className="truncate text-[10px] font-medium text-gray-600">
              {card.name}
            </p>
          </div>
        </div>

        <MoreHorizontal size={16} className="shrink-0 text-gray-400" />
      </div>

      <div className="mx-auto mt-4 flex w-fit items-baseline rounded-2xl bg-gray-50 px-4 py-2.5">
        <span className="text-lg font-semibold text-gray-700">
          {card.sessions}
        </span>
        <span className="ml-1 text-[8px] text-gray-400">/Sessions</span>
      </div>
    </section>
  );
}

function OnlineUsers() {
  return (
    <section className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold text-gray-700">Online Users</h2>
        <MoreHorizontal size={16} className="text-gray-400" />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        <div className="relative h-32 w-32 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
            />

            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#16a34a"
              strokeWidth="6"
              strokeDasharray="135 302"
              strokeLinecap="round"
            />

            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="6"
              strokeDasharray="85 302"
              strokeDashoffset="-145"
              strokeLinecap="round"
            />

            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="6"
              strokeDasharray="75 302"
              strokeDashoffset="-238"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">1,883</span>
            <span className="text-[9px] text-gray-400">Online</span>
          </div>
        </div>

        <div className="space-y-3 text-[10px] text-gray-500">
          {[
            ["bg-teal-400", "Web", "20%"],
            ["bg-green-600", "iOS", "45%"],
            ["bg-amber-400", "Android", "35%"],
          ].map(([color, label, value]) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
              <div>
                <p>{label}</p>
                <p className="font-semibold text-gray-600">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 pt-4 text-center">
        {[
          ["350", "Web"],
          ["895", "iOS"],
          ["638", "Android"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-base font-semibold text-gray-700">{value}</p>
            <p className="text-[9px] text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-700">Overview</h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Download dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 shadow-sm hover:bg-gray-50"
          >
            <Download size={16} />
          </button>

          <DateSelector>Last 7 days</DateSelector>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <SummaryCard key={card.title} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <StatisticsChart />
        <AnalyticsChart />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-2">
          {trafficCards.map((card) => (
            <TrafficCard key={card.title} card={card} />
          ))}
        </div>

        <OnlineUsers />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;

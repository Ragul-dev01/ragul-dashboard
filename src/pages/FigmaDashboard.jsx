
import {
  Download,
  CalendarDays,
  ChevronDown,
  MoreHorizontal,
  ShoppingBag,
  Luggage,
  Utensils,
  Heart,
  Dumbbell,
  CreditCard,
  Plus,
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";

const summary = [
  {
    title: "Total Income",
    amount: "$8.500",
    change: "50.8%",
    positive: true,
    color: "#16a34a",
    points: "0,24 8,18 16,22 24,8 32,12 40,2 48,10 56,6 64,15",
  },
  {
    title: "Total Expense",
    amount: "3.500K",
    change: "10.5%",
    positive: false,
    color: "#2dd4bf",
    points: "0,15 8,8 16,18 24,5 32,10 40,2 48,13 56,7 64,12",
  },
  {
    title: "Total Bonus",
    amount: "5.100K",
    change: "24.9%",
    positive: true,
    color: "#16a34a",
    points: "0,16 8,10 16,14 24,4 32,9 40,1 48,8 56,5 64,12",
  },
];

const statistics = [
  { day: "Mon", income: 180, expense: 330 },
  { day: "Tue", income: 260, expense: 60 },
  { day: "Wed", income: 340, expense: 210 },
  { day: "Thu", income: 300, expense: 100 },
  { day: "Fri", income: 390, expense: 140 },
  { day: "Sat", income: 320, expense: 240 },
  { day: "Sun", income: 220, expense: 160 },
];

const transactions = [
  {
    name: "Shopping",
    detail: "08:00 AM – 19 August",
    amount: "-$1.400",
    Icon: ShoppingBag,
    color: "bg-teal-400",
  },
  {
    name: "Travel",
    detail: "09:45 AM – 21 August",
    amount: "-$850",
    Icon: Luggage,
    color: "bg-violet-500",
  },
  {
    name: "Food",
    detail: "10:15 AM – 24 August",
    amount: "-$2.150",
    Icon: Utensils,
    color: "bg-amber-400",
  },
  {
    name: "Medicine",
    detail: "10:50 AM – 24 August",
    amount: "-$650",
    Icon: Heart,
    color: "bg-rose-400",
  },
  {
    name: "Sport",
    detail: "12:45 AM – 28 August",
    amount: "-$900",
    Icon: Dumbbell,
    color: "bg-green-600",
  },
];

function DateButton({ children = "19 Aug – 25 Aug" }) {
  return (
    <button
      type="button"
      className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 text-[10px] text-gray-500"
    >
      <CalendarDays size={12} />
      {children}
      <ChevronDown size={11} />
    </button>
  );
}

function SummaryCard({ item }) {
  return (
    <section className="flex min-w-0 items-center justify-between gap-3 border-r border-gray-100 bg-white px-4 py-5 last:border-r-0">
      <div className="min-w-0">
        <p className="text-[10px] text-gray-400">{item.title}</p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-700">
            {item.amount}
          </h2>
          <span
            className={`text-[9px] font-medium ${
              item.positive ? "text-green-600" : "text-red-400"
            }`}
          >
            {item.positive ? "↑" : "↓"} {item.change}
          </span>
        </div>
      </div>

      <svg viewBox="0 0 64 28" className="h-8 w-16 shrink-0">
        <polyline
          points={item.points}
          fill="none"
          stroke={item.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
}

function StatisticsCard() {
  const max = 420;

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xs font-semibold text-gray-700">Statistics</h2>
        <DateButton />
      </div>

      <div className="mb-4 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
            <TrendingUp size={12} />
          </span>
          <div>
            <p className="text-[10px] text-gray-600">20.500</p>
            <p className="text-[9px] text-gray-400">Income</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            <TrendingDown size={12} />
          </span>
          <div>
            <p className="text-[10px] text-gray-600">5.400</p>
            <p className="text-[9px] text-gray-400">Expense</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex h-36 w-7 shrink-0 flex-col justify-between pb-5 text-[8px] text-gray-400">
          <span>10K</span>
          <span>5K</span>
          <span>2K</span>
          <span>1K</span>
          <span>0</span>
        </div>

        <div className="relative flex h-36 min-w-0 flex-1 items-end justify-around border-b border-gray-100 pb-5">
          {[0, 1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="pointer-events-none absolute left-0 right-0 border-t border-gray-100"
              style={{ bottom: `${20 + line * 20}%` }}
            />
          ))}

          {statistics.map((item) => (
            <div
              key={item.day}
              className="relative z-10 flex h-full flex-1 items-end justify-center gap-1"
            >
              <div
                className="w-2 rounded-t-full bg-green-600 sm:w-2.5"
                style={{ height: `${(item.income / max) * 100}%` }}
              />
              <div
                className="w-2 rounded-t-full bg-teal-400 sm:w-2.5"
                style={{ height: `${(item.expense / max) * 100}%` }}
              />
              <span className="absolute top-full mt-2 text-[8px] text-gray-400">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BalanceCard() {
  return (
    <section className="min-w-0 overflow-hidden rounded-lg bg-green-600 p-4 text-white shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold">Balance</h2>
        <MoreHorizontal size={18} />
      </div>

      <p className="mt-4 text-2xl font-semibold">$27,500.00</p>

      <div className="mt-3 flex gap-2 text-[9px]">
        <span className="rounded bg-white/20 px-2 py-1">Income</span>
        <span className="px-2 py-1 text-white/70">Expenses</span>
      </div>

      <svg
        viewBox="0 0 320 105"
        className="mt-3 w-full"
        role="img"
        aria-label="Balance trend chart"
      >
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="320"
            y2={y}
            stroke="white"
            opacity="0.15"
            strokeDasharray="3 3"
          />
        ))}

        <path
          d="M0 83 C20 48, 35 60, 50 75 S85 95, 105 52 S135 63, 158 32 S185 65, 207 43 S240 70, 257 25 S285 55, 320 12"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M0 98 C35 90, 50 96, 80 91 S130 98, 160 89 S215 96, 250 88 S290 92, 320 84"
          fill="none"
          stroke="#bbf7d0"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        <circle cx="257" cy="25" r="4" fill="white" />
        <rect x="239" y="2" width="36" height="16" rx="5" fill="white" />
        <text
          x="257"
          y="13"
          textAnchor="middle"
          fontSize="8"
          fill="#15803d"
        >
          $250
        </text>
      </svg>

      <div className="mt-1 flex justify-between gap-2 text-[9px] text-white/90">
        <span>Income: $500</span>
        <span>Spending: $200</span>
      </div>
    </section>
  );
}

function BankCard() {
  return (
    <div className="relative h-[138px] overflow-hidden rounded-lg bg-green-600 p-4 text-white">
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[9px] text-white/80">Current Balance</span>
        <span className="text-sm font-black italic">VISA</span>
      </div>

      <p className="relative z-10 text-lg font-semibold">80,700.00</p>

      <div className="absolute -bottom-16 -right-10 h-36 w-36 rounded-full bg-teal-400" />

      <div className="absolute bottom-3 left-4 z-10">
        <p className="text-[9px]">Felicia Brown</p>
        <p className="mt-1 text-[9px] tracking-[2px]">•••• •••• 8854</p>
      </div>

      <span className="absolute bottom-3 right-3 z-10 text-[9px]">12/19</span>
    </div>
  );
}

function MyCards() {
  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xs font-semibold text-gray-700">My Cards</h2>

        <button
          type="button"
          className="rounded-full border border-gray-100 px-3 py-2 text-[9px] text-gray-500"
        >
          🔴 5880 **** **** 8854 <ChevronDown className="ml-1 inline" size={10} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1fr]">
        <BankCard />

        <div className="space-y-3 text-[10px]">
          {[
            ["Card Type:", "Visa"],
            ["Card Holder:", "Felicia Brown"],
            ["Expires:", "12/19"],
            ["Card Number:", "5880 5087 3288 8854"],
            ["Total Balance:", "80,700.00"],
            ["Total Debt:", "8,250.00"],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-wrap justify-between gap-2">
              <span className="text-gray-400">{label}</span>
              <span className="font-medium text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-[10px] font-medium text-green-700"
        >
          <Plus size={12} />
          Add Card
        </button>
        <button
          type="button"
          className="rounded-lg bg-green-600 px-4 py-2 text-[10px] font-medium text-white"
        >
          Pay Debt
        </button>
        <button
          type="button"
          className="rounded-lg border border-gray-100 px-4 py-2 text-[10px] text-gray-500"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

function Transactions() {
  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-gray-700">Transactions</h2>
        <MoreHorizontal size={17} className="text-gray-400" />
      </div>

      <div className="space-y-5">
        {transactions.map(({ name, detail, amount, Icon, color }) => (
          <div key={name} className="flex min-w-0 items-center gap-2.5">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${color}`}
            >
              <Icon size={14} strokeWidth={2.2} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium text-gray-700">
                {name}
              </p>
              <p className="truncate text-[8px] text-gray-400">{detail}</p>
            </div>

            <p className="shrink-0 text-[9px] font-semibold text-gray-600">
              {amount}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FigmaDashboard() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-lg font-semibold text-gray-700">Overview</h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Download"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 shadow-sm"
          >
            <Download size={15} />
          </button>
          <DateButton>Last 7 days</DateButton>
        </div>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 shadow-sm sm:grid-cols-3">
        {summary.map((item) => (
          <SummaryCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.8fr_0.9fr]">
        <StatisticsCard />
        <BalanceCard />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.8fr_0.9fr]">
        <MyCards />
        <Transactions />
      </div>
    </div>
  );
}

export default FigmaDashboard;

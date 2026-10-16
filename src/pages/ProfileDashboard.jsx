
import { useState } from "react";
import {
  Settings,
  Activity,
  Users,
  Download,
  CalendarDays,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Mail,
  Phone,
  Cake,
  MapPin,
  ChevronDown,
  MoreVertical,
  MessageCircle,
} from "lucide-react";

import feliciaBrown from "../assets/felicia-brown.png";
import ChatPanel from "../components/ChatPanel";

const favorites = [
  { name: "Ronald Robertson", role: "Product Designer" },
  { name: "Regina Cooper", role: "Project Manager" },
  { name: "Judith Black", role: "Business Analyst" },
  { name: "Dustin Williamson", role: "Web Developer" },
  { name: "Calvin Flores", role: "Senior Vice President" },
];

const newFollowers = [
  { name: "Devon Williamson", role: "Product Designer", company: "Apple Inc" },
  { name: "Debra Wilson", role: "Project Manager", company: "Facebook Inc" },
  { name: "Judith Black", role: "Business Analyst", company: "Google Inc" },
  { name: "Philip Henry", role: "Web Developer", company: "Google Inc" },
  { name: "Mitchell Cooper", role: "Senior Vice President", company: "Amazon Inc" },
];

const visits = [
  { day: "Mon", value: 2000 },
  { day: "Tue", value: 1200 },
  { day: "Wed", value: 3100 },
  { day: "Thu", value: 1400 },
  { day: "Fri", value: 2200 },
  { day: "Sat", value: 7600 },
  { day: "Sun", value: 2100 },
];

const growth = [
  { day: "Mon", value: 4300 },
  { day: "Tue", value: 1200 },
  { day: "Wed", value: 3500 },
  { day: "Thu", value: 2100 },
  { day: "Fri", value: 3000 },
  { day: "Sat", value: 5200 },
  { day: "Sun", value: 1800 },
];

function DateFilter() {
  return (
    <button
      type="button"
      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-2 text-[10px] text-gray-500 shadow-sm"
    >
      <CalendarDays size={12} />
      19 Aug – 25 Aug
      <ChevronDown size={11} />
    </button>
  );
}

function ProfileSidebar() {
  return (
    <aside className="w-full shrink-0 border-b border-gray-100 bg-white p-5 sm:p-6 lg:w-[245px] lg:border-b-0 lg:border-r">
      <div className="flex flex-col items-center border-b border-gray-100 pb-6">
        <img
          src={feliciaBrown}
          alt="Felicia Brown"
          className="h-20 w-20 rounded-[24px] object-cover"
        />

        <h2 className="mt-3 text-sm font-semibold text-gray-800">
          Felicia Brown
        </h2>
        <p className="mt-1 text-xs text-gray-400">Project Manager</p>

        <button
          type="button"
          className="mt-4 rounded-md bg-green-600 px-5 py-2 text-xs font-medium text-white transition hover:bg-green-700"
        >
          Edit profile
        </button>
      </div>

      <div className="border-b border-gray-100 py-5">
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-gray-700">
          Info
        </h3>

        <div className="space-y-4">
          <div>
            <p className="mb-1 text-[9px] uppercase text-gray-400">Email</p>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <Mail size={12} className="shrink-0 text-gray-400" />
              <span className="break-all">example@mail.com</span>
            </div>
          </div>

          <div>
            <p className="mb-1 text-[9px] uppercase text-gray-400">Phone</p>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <Phone size={12} className="shrink-0 text-gray-400" />
              +123-4567-8800
            </div>
          </div>

          <div>
            <p className="mb-1 text-[9px] uppercase text-gray-400">Birthday</p>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <Cake size={12} className="shrink-0 text-gray-400" />
              17 March, 1995
            </div>
          </div>

          <div>
            <p className="mb-1 text-[9px] uppercase text-gray-400">Location</p>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <MapPin size={12} className="shrink-0 text-gray-400" />
              New York, NY
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-gray-700">
          Favorites
        </h3>

        <div className="space-y-4">
          {favorites.map((person) => (
            <div
              key={person.name}
              className="flex min-w-0 items-center gap-2.5"
            >
              <img
                src={feliciaBrown}
                alt=""
                className="h-8 w-8 shrink-0 rounded-full object-cover"
              />

              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium text-gray-700">
                  {person.name}
                </p>
                <p className="truncate text-[9px] text-gray-400">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SummaryCard({ title, amount, change, positive, icon: Icon }) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 rounded-lg border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
      <div className="min-w-0">
        <p className="truncate text-[10px] text-gray-400 sm:text-[11px]">
          {title}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-1.5">
          <span className="text-base font-semibold text-gray-700 sm:text-lg">
            {amount}
          </span>

          <span
            className={`flex items-center gap-0.5 text-[9px] font-medium ${
              positive ? "text-green-500" : "text-red-400"
            }`}
          >
            {positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {positive ? "+" : ""}
            {change}
          </span>
        </div>
      </div>

      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl sm:h-9 sm:w-9 ${
          positive ? "bg-green-50 text-green-600" : "bg-teal-50 text-teal-500"
        }`}
      >
        <Icon size={15} />
      </div>
    </div>
  );
}

function VisitsChart() {
  const width = 440;
  const height = 145;
  const max = 10000;

  const points = visits
    .map((item, index) => {
      const x = (index / (visits.length - 1)) * width;
      const y = height - (item.value / max) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const area = `0,${height} ${points} ${width},${height}`;

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xs font-semibold text-gray-700">Visits</h3>
        <DateFilter />
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
          { label: "Min. Visits", value: "1.400", positive: false },
          { label: "Avg. Visits", value: "3.100", positive: false },
          { label: "Max. Visits", value: "9.500", positive: true },
        ].map((item) => (
          <div key={item.label} className="flex min-w-0 items-center gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${
                item.positive
                  ? "bg-green-50 text-green-500"
                  : "bg-teal-50 text-teal-500"
              }`}
            >
              {item.positive ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
            </span>

            <div className="min-w-0">
              <p className="text-[10px] font-medium text-gray-600">
                {item.value}
              </p>
              <p className="truncate text-[9px] text-gray-400">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="flex h-[145px] w-7 shrink-0 flex-col justify-between pb-1 text-[9px] text-gray-400">
          <span>10K</span>
          <span>5K</span>
          <span>2K</span>
          <span>1K</span>
          <span>0</span>
        </div>

        <div className="min-w-0 flex-1">
          <svg
            viewBox={`-3 -4 ${width + 6} ${height + 28}`}
            className="w-full overflow-visible"
            role="img"
            aria-label="Weekly visits line chart"
          >
            {[0, 1, 2, 3, 4].map((line) => (
              <line
                key={line}
                x1="0"
                y1={line * (height / 4)}
                x2={width}
                y2={line * (height / 4)}
                stroke="#edf0f2"
                strokeWidth="1"
              />
            ))}

            <polygon points={area} fill="#16a34a" opacity="0.08" />

            <polyline
              points={points}
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {visits.map((item, index) => {
              const x = (index / (visits.length - 1)) * width;
              const y = height - (item.value / max) * height;

              return (
                <g key={item.day}>
                  <circle
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill="white"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                  />

                  <text
                    x={x}
                    y={height + 19}
                    fontSize="10"
                    textAnchor="middle"
                    fill="#9ca3af"
                  >
                    {item.day}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

function FollowersChart() {
  const channels = [
    { name: "Facebook", value: "3.5k", color: "#42cbb6" },
    { name: "Twitter", value: "7.8k", color: "#fbbf24" },
    { name: "Instagram", value: "5.8k", color: "#16a34a" },
    { name: "YouTube", value: "4.7k", color: "#fb7185" },
  ];

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-semibold text-gray-700">Followers</h3>
        <MoreHorizontal size={17} className="text-gray-400" />
      </div>

      <div className="flex justify-center py-1">
        <div
          className="flex h-28 w-28 items-center justify-center rounded-full"
          style={{
            background:
              "conic-gradient(#16a34a 0deg 176deg, #fbbf24 176deg 205deg, #fb7185 205deg 275deg, #42cbb6 275deg 360deg)",
          }}
        >
          <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full bg-white">
            <span className="text-lg font-semibold text-gray-700">21.800</span>
            <span className="text-[10px] text-gray-400">Total</span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3">
        {channels.map((channel) => (
          <div
            key={channel.name}
            className="flex min-w-0 items-center gap-1.5"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: channel.color }}
            />
            <span className="truncate text-[9px] text-gray-500">
              {channel.name}
            </span>
            <span className="text-[9px] text-gray-600">{channel.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FollowersGrowth() {
  const max = 6000;

  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xs font-semibold text-gray-700">
          Followers Growth
        </h3>
        <DateFilter />
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-50 text-green-600">
            <TrendingUp size={12} />
          </span>
          <div>
            <p className="text-[10px] font-medium text-gray-600">21.800</p>
            <p className="text-[9px] text-gray-400">Current Week</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-50 text-teal-500">
            <TrendingDown size={12} />
          </span>
          <div>
            <p className="text-[10px] font-medium text-gray-600">19.400</p>
            <p className="text-[9px] text-gray-400">Last Week</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex h-28 w-7 shrink-0 flex-col justify-between pb-4 text-[9px] text-gray-400">
          <span>10K</span>
          <span>5K</span>
          <span>2K</span>
          <span>1K</span>
          <span>0</span>
        </div>

        <div className="relative flex h-28 min-w-0 flex-1 items-end justify-around gap-2 border-b border-gray-100 pb-4">
          {[0, 1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="pointer-events-none absolute left-0 right-0 border-t border-gray-100"
              style={{ bottom: `${16 + line * 21}%` }}
            />
          ))}

          {growth.map((item, index) => (
            <div
              key={item.day}
              className="relative z-10 flex h-full flex-1 flex-col items-center justify-end"
            >
              <div
                className={`w-full max-w-[14px] rounded-full ${
                  index % 2 === 1 ? "bg-green-100" : "bg-green-600"
                }`}
                style={{ height: `${(item.value / max) * 100}%` }}
                title={`${item.value} followers`}
              />

              <span className="absolute top-full mt-1 text-[9px] text-gray-400">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewFollowers() {
  return (
    <section className="min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xs font-semibold text-gray-700">New Followers</h3>
        <DateFilter />
      </div>

      <div className="space-y-3">
        {newFollowers.map((person) => (
          <div key={person.name} className="flex min-w-0 items-center gap-2">
            <img
              src={feliciaBrown}
              alt=""
              className="h-7 w-7 shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium text-gray-700">
                {person.name}
              </p>
              <p className="truncate text-[9px] text-gray-400">
                {person.role}, {person.company}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-md bg-green-50 px-3 py-1 text-[9px] font-medium text-green-600 transition hover:bg-green-100"
            >
              Follow
            </button>

            <button
              type="button"
              aria-label={`More options for ${person.name}`}
              className="shrink-0 text-gray-400 hover:text-gray-700"
            >
              <MoreVertical size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProfileDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const summaryCards = [
    {
      title: "Total Visitors",
      amount: "20.500",
      change: "4.85%",
      positive: true,
      icon: TrendingUp,
    },
    {
      title: "Total Followers",
      amount: "21.800",
      change: "5.25%",
      positive: false,
      icon: TrendingDown,
    },
    {
      title: "Total Likes",
      amount: "30.400",
      change: "3.55%",
      positive: true,
      icon: TrendingUp,
    },
    {
      title: "Total Comments",
      amount: "14.800",
      change: "0.30%",
      positive: false,
      icon: TrendingDown,
    },
  ];

  return (
    <>
      <div className="mx-auto w-full max-w-[1600px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-[11px] font-medium text-green-700"
            >
              <Settings size={13} />
              Settings
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-[11px] text-gray-500 hover:text-gray-800"
            >
              <Activity size={13} />
              Activity
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-[11px] text-gray-500 hover:text-gray-800"
            >
              <Users size={13} />
              Users
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open chat"
              title="Open chat"
              onClick={() => setIsChatOpen(true)}
              className={`rounded-lg p-2 transition ${
                isChatOpen
                  ? "bg-green-50 text-green-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <MessageCircle size={16} />
            </button>

            <button
              type="button"
              aria-label="Download dashboard"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            >
              <Download size={15} />
            </button>

            <img
              src={feliciaBrown}
              alt="ArtTemplate"
              className="h-7 w-7 rounded-full object-cover"
            />

            <span className="hidden text-[11px] font-medium text-gray-700 sm:inline">
              ArtTemplate
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col lg:flex-row">
          <ProfileSidebar />

          <main className="min-w-0 flex-1 bg-gray-50/70 p-4 sm:p-5 lg:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-lg font-semibold text-gray-700">Overview</h1>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 text-[10px] text-gray-500 shadow-sm"
              >
                <Download size={13} />
                <span>Last 7 days</span>
                <CalendarDays size={12} />
              </button>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              {summaryCards.map((card) => (
                <SummaryCard key={card.title} {...card} />
              ))}
            </div>

            <div className="mb-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.8fr_1fr]">
              <VisitsChart />
              <FollowersChart />
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <FollowersGrowth />
              <NewFollowers />
            </div>
          </main>
        </div>
      </div>

      {isChatOpen && (
        <>
          <button
            type="button"
            aria-label="Close chat overlay"
            onClick={() => setIsChatOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/10"
          />

          <ChatPanel onClose={() => setIsChatOpen(false)} />
        </>
      )}
    </>
  );
}

export default ProfileDashboard;

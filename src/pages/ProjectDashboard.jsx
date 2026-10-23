import { useState } from "react";
import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Download,
  Plus,
  Zap,
} from "lucide-react";

const taskStats = [
  {
    value: "780",
    label: "Total Tasks",
    icon: ClipboardList,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    value: "136",
    label: "New Tasks",
    icon: ClipboardList,
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
  {
    value: "324",
    label: "In Progress",
    icon: Clock3,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    value: "215",
    label: "Done Tasks",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const statistics = [
  { day: "Mon", newTasks: 85, progress: 140 },
  { day: "Tue", newTasks: 180, progress: 115 },
  { day: "Wed", newTasks: 145, progress: 225 },
  { day: "Thu", newTasks: 320, progress: 175 },
  { day: "Fri", newTasks: 155, progress: 205 },
  { day: "Sat", newTasks: 190, progress: 165 },
  { day: "Sun", newTasks: 140, progress: 225 },
];

const initialTasks = [
  {
    id: 1,
    name: "Sending project #783 for revision to Leslie Mills",
    done: false,
  },
  {
    id: 2,
    name: "Sending project #675 for revision to Kristin Edwards",
    done: true,
  },
  {
    id: 3,
    name: "Sending project #788 for revision to Regina Warren",
    done: false,
  },
  {
    id: 4,
    name: "Sending project #543 for revision to Stella Penas",
    done: false,
  },
];

const activities = [
  {
    date: "12 September",
    items: [
      { time: "08:30", name: "Regina Cooper", action: "Added new project", id: "#443", color: "bg-green-500" },
      { time: "15:00", name: "Kristin Edwards", action: "Updated project", id: "#488", color: "bg-amber-400" },
      { time: "17:20", name: "Regina Cooper", action: "Closed project", id: "#129", color: "bg-teal-400" },
    ],
  },
  {
    date: "11 September",
    items: [
      { time: "14:00", name: "Jorge Robertson", action: "Completed project", id: "#389", color: "bg-green-500" },
      { time: "15:20", name: "Regina Cooper", action: "Closed project", id: "#401", color: "bg-teal-400" },
      { time: "14:00", name: "Stella Pena", action: "Added new project", id: "#442", color: "bg-amber-400" },
      { time: "15:20", name: "Priscilla Russell", action: "Updated project", id: "#324", color: "bg-amber-400" },
    ],
  },
  {
    date: "10 September",
    items: [
      { time: "14:00", name: "Leslie Mills", action: "Added new project", id: "#441", color: "bg-green-500" },
      { time: "15:20", name: "Regina Cooper", action: "Added new project", id: "#440", color: "bg-teal-400" },
      { time: "14:40", name: "Regina Warren", action: "Updated project", id: "#274", color: "bg-amber-400" },
    ],
  },
];

const scheduleHours = Array.from({ length: 24 }, (_, index) => index);
const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const scheduledTasks = [
  [1, 5, 8, 12, 16],
  [2, 4, 7, 10, 15, 23],
  [0, 6, 9, 13, 18, 21],
  [3, 7, 12, 17],
  [2, 9, 10, 15],
  [4, 8, 15, 21],
  [11, 15],
];

function Card({ children, className = "" }) {
  return (
    <section
      className={`min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

function CardHeading({ children }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-semibold text-gray-700">{children}</h2>
      <button
        type="button"
        aria-label={`More options for ${children}`}
        className="rounded p-1 text-gray-400 hover:bg-gray-100"
      >
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
}

function TaskStatistics() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {taskStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.label} className="flex min-h-[100px] flex-col justify-center p-3">
            <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}>
              <Icon size={17} strokeWidth={1.8} />
            </div>
            <p className="text-2xl font-semibold leading-tight text-gray-800">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] text-gray-400">{stat.label}</p>
          </Card>
        );
      })}
    </div>
  );
}

function StatisticsChart() {
  return (
    <Card className="h-full">
      <CardHeading>Statistics</CardHeading>

      <div className="mb-3 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-gray-100 px-2.5 py-1.5 text-[10px] text-gray-500"
        >
          <Download size={12} />
          19 Aug – 25 Aug
          <ChevronRight size={12} className="rotate-90" />
        </button>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-7 pt-1">
          {[400, 300, 200, 100, 0].map((value) => (
            <div key={value} className="flex items-center gap-2">
              <span className="w-5 text-right text-[9px] text-gray-400">
                {value}
              </span>
              <div className="h-px flex-1 bg-gray-50" />
            </div>
          ))}
        </div>

        <div className="relative grid h-[170px] grid-cols-7 gap-2 pl-7">
          {statistics.map((item) => (
            <div
              key={item.day}
              className="flex min-w-0 flex-col items-center justify-end"
            >
              <div className="flex h-[142px] w-full items-end justify-center gap-1">
                <div
                  className="w-1/2 max-w-6 rounded-t-[4px] bg-green-600"
                  style={{ height: `${(item.newTasks / 400) * 100}%` }}
                />
                <div
                  className="w-1/2 max-w-6 rounded-t-[4px] bg-teal-400"
                  style={{ height: `${(item.progress / 400) * 100}%` }}
                />
              </div>
              <span className="mt-2 text-[10px] text-gray-400">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
          New Tasks
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          In Progress
        </span>
      </div>
    </Card>
  );
}

function ProjectsCard() {
  return (
    <Card className="h-full">
      <CardHeading>Projects</CardHeading>

      <div className="flex justify-center py-2">
        <div className="relative h-36 w-36">
          <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="54"
              fill="none"
              stroke="#e1f7f2"
              strokeWidth="9"
              strokeDasharray="96 244"
              strokeLinecap="round"
            />
            <circle
              cx="80"
              cy="80"
              r="54"
              fill="none"
              stroke="#16bba6"
              strokeWidth="9"
              strokeDasharray="105 235"
              strokeDashoffset="-103"
              strokeLinecap="round"
            />
            <circle
              cx="80"
              cy="80"
              r="54"
              fill="none"
              stroke="#159447"
              strokeWidth="9"
              strokeDasharray="70 270"
              strokeDashoffset="-215"
              strokeLinecap="round"
            />
            <circle
              cx="80"
              cy="80"
              r="54"
              fill="none"
              stroke="#ffc337"
              strokeWidth="9"
              strokeDasharray="66 274"
              strokeDashoffset="-292"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-gray-700">830</span>
            <span className="text-[10px] text-gray-400">Projects</span>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 divide-x divide-gray-100">
        <div className="text-center">
          <p className="text-lg font-semibold text-teal-500">420</p>
          <p className="text-[10px] text-gray-400">Ongoing</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-amber-500">210</p>
          <p className="text-[10px] text-gray-400">Hold</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-green-600">200</p>
          <p className="text-[10px] text-gray-400">Done</p>
        </div>
      </div>
    </Card>
  );
}

function ActiveTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [period, setPeriod] = useState("Day");

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <Card>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-gray-700">Active Tasks</h2>

        <div className="flex rounded-md bg-gray-50 p-0.5">
          {["Day", "Week", "Month"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setPeriod(option)}
              className={`rounded-md px-3 py-1.5 text-[10px] ${
                period === option
                  ? "bg-green-600 font-medium text-white"
                  : "text-gray-500"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`flex min-w-0 items-start gap-2 border-l-2 py-2 pl-3 ${
              index === 3 ? "border-amber-400" : "border-green-500"
            }`}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              aria-label={`Mark task ${task.id} complete`}
              className="mt-1 h-3.5 w-3.5 shrink-0 accent-green-600"
            />

            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-gray-400">Regina Cooper</p>
              <p
                className={`mt-0.5 text-[11px] leading-5 text-gray-600 ${
                  task.done ? "line-through text-gray-400" : ""
                }`}
              >
                {task.name.split(/(#\d+)/).map((part, partIndex) =>
                  part.startsWith("#") ? (
                    <span key={partIndex} className="text-green-600">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
            </div>

            <button
              type="button"
              aria-label="Task options"
              className="shrink-0 text-gray-400"
            >
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}

function CalendarCard() {
  const [month, setMonth] = useState(8);
  const [year, setYear] = useState(2020);
  const [selectedDay, setSelectedDay] = useState(12);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const firstDay = new Date(year, month, 1).getDay();
  const mondayOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();

  const calendarDays = Array.from({ length: 35 }, (_, index) => {
    const dayNumber = index - mondayOffset + 1;

    if (dayNumber < 1) {
      return {
        day: previousMonthDays + dayNumber,
        outside: true,
        key: `prev-${index}`,
      };
    }

    if (dayNumber > daysInMonth) {
      return {
        day: dayNumber - daysInMonth,
        outside: true,
        key: `next-${index}`,
      };
    }

    return { day: dayNumber, outside: false, key: `current-${index}` };
  });

  function changeMonth(direction) {
    const date = new Date(year, month + direction, 1);
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setSelectedDay(1);
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => changeMonth(-1)}
          className="rounded p-1 text-gray-400 hover:bg-gray-100"
        >
          <ChevronLeft size={16} />
        </button>

        <h2 className="text-xs font-semibold text-gray-600">
          {monthNames[month]} {year}
        </h2>

        <button
          type="button"
          aria-label="Next month"
          onClick={() => changeMonth(1)}
          className="rounded p-1 text-gray-400 hover:bg-gray-100"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7">
        {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((day) => (
          <span
            key={day}
            className="py-1 text-center text-[9px] text-gray-400"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {calendarDays.map((item) => (
          <button
            key={item.key}
            type="button"
            disabled={item.outside}
            onClick={() => setSelectedDay(item.day)}
            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[10px] ${
              item.outside
                ? "text-gray-300"
                : selectedDay === item.day
                  ? "bg-green-600 font-semibold text-white"
                  : "text-gray-600 hover:bg-green-50"
            }`}
          >
            {item.day}
          </button>
        ))}
      </div>
    </Card>
  );
}

function RecentActivity() {
  return (
    <Card>
      <CardHeading>Recent Activity</CardHeading>

      <div className="space-y-4">
        {activities.map((group) => (
          <div key={group.date}>
            <p className="mb-3 text-[10px] text-gray-400">{group.date}</p>

            <div className="space-y-3">
              {group.items.map((activity, index) => (
                <div
                  key={`${group.date}-${activity.time}-${activity.id}-${index}`}
                  className="grid grid-cols-[34px_minmax(0,1fr)] gap-2"
                >
                  <span className="pt-0.5 text-[10px] text-gray-500">
                    {activity.time}
                  </span>

                  <div className={`min-w-0 border-l-2 pl-2.5 ${activity.color.replace("bg-", "border-")}`}>
                    <p className="truncate text-[10px] font-medium text-gray-700">
                      {activity.name}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-4 text-gray-400">
                      {activity.action}{" "}
                      <span className="text-green-600">{activity.id}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PostingTasks() {
  const [selectedCells, setSelectedCells] = useState(scheduledTasks);

  function toggleCell(dayIndex, hourIndex) {
    setSelectedCells((current) =>
      current.map((hours, index) => {
        if (index !== dayIndex) return hours;

        return hours.includes(hourIndex)
          ? hours.filter((hour) => hour !== hourIndex)
          : [...hours, hourIndex];
      })
    );
  }

  return (
    <Card>
      <CardHeading>Posting Tasks</CardHeading>

      <p className="mb-4 text-[10px] leading-5 text-gray-500">
        Immediate tasks:{" "}
        <button type="button" className="underline underline-offset-2">
          Wednesday at 10AM
        </button>
        {" / "}
        <button type="button" className="underline underline-offset-2">
          Wednesday at 4PM
        </button>
        {" / "}
        <span className="text-amber-500">⚡</span>
        <button type="button" className="underline underline-offset-2">
          Important
        </button>
      </p>

      <div className="w-full">
        <div className="mb-1 grid grid-cols-[20px_repeat(24,minmax(0,1fr))] gap-[3px]">
          <span />
          {scheduleHours.map((hour) => (
            <span
              key={hour}
              className="overflow-hidden text-center text-[7px] text-gray-400 sm:text-[8px]"
            >
              {hour === 0 ? "12AM" : hour < 12 ? `${hour}AM` : hour === 12 ? "12PM" : `${hour - 12}PM`}
            </span>
          ))}
        </div>

        <div className="space-y-[3px]">
          {weekdays.map((day, dayIndex) => (
            <div
              key={day}
              className="grid grid-cols-[20px_repeat(24,minmax(0,1fr))] gap-[3px]"
            >
              <span className="flex items-center text-[8px] text-gray-400">
                {day}
              </span>

              {scheduleHours.map((hour) => {
                const isSelected = selectedCells[dayIndex].includes(hour);

                return (
                  <button
                    key={hour}
                    type="button"
                    aria-label={`${day} ${hour}:00 posting task`}
                    onClick={() => toggleCell(dayIndex, hour)}
                    className={`flex aspect-square min-w-0 items-center justify-center rounded-[1px] transition-colors ${
                      isSelected
                        ? "bg-teal-100 text-teal-500 hover:bg-teal-200"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    {isSelected && (
                      <Zap
                        size={9}
                        strokeWidth={2.5}
                        className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function ProjectDashboard() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="min-h-full bg-[#f7f8fa] p-3 sm:p-4 lg:p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="mb-1 text-[10px] text-gray-400">
            Dashboard / Projects
          </p>
          <h1 className="text-lg font-semibold text-gray-700">Overview</h1>
        </div>

        <button
          type="button"
          onClick={() => setShowAddTask((current) => !current)}
          className="flex shrink-0 items-center gap-1.5 rounded-md bg-green-600 px-3 py-2 text-[11px] font-medium text-white transition hover:bg-green-700"
        >
          <Plus size={14} />
          Add Task
        </button>
      </div>

      {showAddTask && (
        <div className="mb-4 rounded-lg border border-green-100 bg-white p-3 text-xs text-gray-600 shadow-sm">
          Add Task UI placeholder. The dashboard layout remains unchanged.
          <button
            type="button"
            onClick={() => setShowAddTask(false)}
            className="ml-3 text-green-700 underline"
          >
            Close
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[0.9fr_1.55fr_0.9fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <TaskStatistics />
          <ProjectsCard />
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <StatisticsChart />
          <ActiveTasks />
          <PostingTasks />
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <CalendarCard />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
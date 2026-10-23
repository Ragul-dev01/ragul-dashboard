
import { useState } from "react";
import {
  ClipboardList,
  CheckCircle2,
  MoreHorizontal,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Zap,
  X,
} from "lucide-react";
import profileImage from "../assets/profile.png";

const activities = [
  {
    date: "12 September",
    items: [
      ["08:30", "Priscilla Russell", "Added new project", "#443"],
      ["15:00", "Regina Cooper", "Updated project", "#488"],
      ["17:20", "Ricardo Black", "Completed project", "#389"],
      ["18:00", "Ronald Watson", "Added new project", "#442"],
    ],
  },
  {
    date: "16 September",
    items: [
      ["14:00", "Priscilla Russell", "Added new project", "#443"],
      ["15:20", "Regina Cooper", "Updated project", "#488"],
      ["17:20", "Ricardo Black", "Completed project", "#389"],
    ],
  },
];

const tasks = [
  { name: "Regina Cooper", text: "Sending project #783 for revision to Leslie Mills", checked: false, color: "border-green-500" },
  { name: "Regina Cooper", text: "Sending project #675 for revision to Kristin Edwards", checked: true, color: "border-teal-400" },
  { name: "Regina Cooper", text: "Sending project #788 for revision to Regina Warren", checked: false, color: "border-green-500" },
  { name: "Regina Cooper", text: "Sending project #543 for revision to Stella Penas", checked: false, color: "border-amber-400" },
];

const projectTypes = [
  { name: "Product Design", count: 87, width: "48%", color: "bg-green-600" },
  { name: "Graphic Design", count: 108, width: "66%", color: "bg-teal-400" },
  { name: "iOS Apps", count: 100, width: "62%", color: "bg-amber-400" },
  { name: "Android Apps", count: 24, width: "22%", color: "bg-green-500" },
];

const chartData = [
  { day: "M", first: 34, second: 54 },
  { day: "T", first: 72, second: 42 },
  { day: "W", first: 57, second: 91 },
  { day: "T", first: 57, second: 72 },
  { day: "F", first: 64, second: 83 },
  { day: "S", first: 53, second: 44 },
  { day: "S", first: 76, second: 63 },
];

const activeHours = [
  [1, 5, 8, 12, 16, 21],
  [2, 4, 7, 10, 14, 23],
  [0, 6, 9, 13, 18, 22],
  [3, 7, 11, 16, 20],
  [2, 9, 10, 14, 19],
  [4, 8, 14, 21],
  [12, 17],
];

function Card({ children, className = "" }) {
  return (
    <section className={`min-w-0 rounded-md border border-gray-100 bg-white p-3 shadow-sm sm:p-3.5 ${className}`}>
      {children}
    </section>
  );
}

function CardHeading({ children }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-xs font-semibold text-gray-700">{children}</h3>
      <button type="button" aria-label={`More options for ${children}`} className="text-gray-400">
        <MoreHorizontal size={17} />
      </button>
    </div>
  );
}

function StatCard({ value, label, tone = "green" }) {
  return (
    <Card className="flex min-h-[94px] flex-col items-center justify-center text-center">
      <div className={`mb-1 flex h-7 w-7 items-center justify-center rounded-md ${tone === "teal" ? "bg-teal-50 text-teal-400" : "bg-emerald-50 text-green-600"}`}>
        <ClipboardList size={17} />
      </div>
      <p className="text-xl font-semibold text-gray-700">{value}</p>
      <p className="text-[10px] text-gray-400">{label}</p>
    </Card>
  );
}

function ProjectsDonut() {
  return (
    <Card className="h-full">
      <CardHeading>Projects</CardHeading>
      <div className="relative mx-auto h-28 w-28">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <circle cx="70" cy="70" r="51" fill="none" stroke="#e6f8f4" strokeWidth="11" />
          <circle cx="70" cy="70" r="51" fill="none" stroke="#37c5b0" strokeWidth="11" strokeLinecap="round" strokeDasharray="105 320" />
          <circle cx="70" cy="70" r="51" fill="none" stroke="#159947" strokeWidth="11" strokeLinecap="round" strokeDasharray="102 320" strokeDashoffset="-115" />
          <circle cx="70" cy="70" r="39" fill="none" stroke="#f7faf8" strokeWidth="11" />
          <circle cx="70" cy="70" r="39" fill="none" stroke="#ffc22e" strokeWidth="11" strokeLinecap="round" strokeDasharray="74 245" strokeDashoffset="-12" />
          <circle cx="70" cy="70" r="39" fill="none" stroke="#159947" strokeWidth="11" strokeLinecap="round" strokeDasharray="65 245" strokeDashoffset="-98" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-gray-700">830</span>
          <span className="text-[10px] text-gray-400">Projects</span>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 divide-x divide-gray-100 text-center">
        <div><p className="text-base font-semibold text-teal-500">420</p><p className="text-[9px] text-gray-400">Ongoing</p></div>
        <div><p className="text-base font-semibold text-amber-500">210</p><p className="text-[9px] text-gray-400">Hold</p></div>
        <div><p className="text-base font-semibold text-green-600">200</p><p className="text-[9px] text-gray-400">Done</p></div>
      </div>
    </Card>
  );
}

function Statistics() {
  const [range, setRange] = useState("19 Aug – 25 Aug");

  return (
    <Card>
      <CardHeading>Statistics</CardHeading>
      <div className="mb-2 flex justify-end">
        <div className="relative">
          <select value={range} onChange={(e) => setRange(e.target.value)} className="appearance-none rounded border border-gray-100 bg-white py-1.5 pl-2 pr-6 text-[9px] text-gray-500 outline-none">
            <option>19 Aug – 25 Aug</option>
            <option>26 Aug – 01 Sep</option>
            <option>02 Sep – 08 Sep</option>
          </select>
          <ChevronDown size={11} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex h-24 items-end justify-between gap-2 px-2">
        {chartData.map((item, i) => (
          <div key={`${item.day}-${i}`} className="flex h-full flex-1 items-end justify-center gap-1">
            <div className="w-2 rounded-t-full bg-green-600" style={{ height: `${item.first}%` }} />
            <div className={`w-2 rounded-t-full ${i === 3 ? "bg-teal-400" : "bg-green-600"}`} style={{ height: `${item.second}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 text-center text-[9px] text-gray-400">
        {chartData.map((item, i) => <span key={`${item.day}-${i}`}>{item.day}</span>)}
      </div>
      <div className="mt-3 flex justify-center gap-4 border-t border-gray-100 pt-2 text-[9px] text-gray-500">
        <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-600" />New Tasks</span>
        <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-teal-400" />In Progress</span>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded bg-gray-50 p-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-green-600"><CheckCircle2 size={16} /></div>
        <div className="min-w-0 flex-1"><p className="text-[10px] font-medium text-gray-700">Completed Project</p><p className="text-[9px] text-gray-400">Current Week</p></div>
        <span className="text-xs font-semibold text-gray-700">874</span>
      </div>
    </Card>
  );
}

function ActiveTasks() {
  const [period, setPeriod] = useState("Day");
  const [taskList, setTaskList] = useState(tasks);

  return (
    <Card>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xs font-semibold text-gray-700">Active Tasks</h3>
        <div className="flex rounded bg-gray-50 p-1">
          {["Day", "Week", "Month"].map((item) => (
            <button key={item} type="button" onClick={() => setPeriod(item)} className={`rounded px-2 py-1 text-[9px] ${period === item ? "bg-green-600 text-white" : "text-gray-500"}`}>{item}</button>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {taskList.map((task, index) => (
          <div key={task.text} className={`flex min-w-0 gap-2 border-l-2 py-1 pl-2 ${task.color}`}>
            <input type="checkbox" checked={task.checked} onChange={() => setTaskList((old) => old.map((t, i) => i === index ? { ...t, checked: !t.checked } : t))} aria-label={`Complete task ${index + 1}`} className="mt-1 h-3 w-3 shrink-0 accent-green-600" />
            <div className="min-w-0 flex-1">
              <p className="text-[9px] text-gray-400">{task.name}</p>
              <p className={`mt-1 text-[10px] leading-4 text-gray-600 ${task.checked ? "line-through" : ""}`}>{task.text.split(/(#\d+)/).map((part, i) => part.startsWith("#") ? <span key={i} className="font-semibold text-green-600">{part}</span> : <span key={i}>{part}</span>)}</p>
            </div>
            <MoreHorizontal size={14} className="shrink-0 text-gray-400" />
          </div>
        ))}
      </div>
    </Card>
  );
}

function TotalProjects() {
  return (
    <Card>
      <CardHeading>Total Projects</CardHeading>
      <div className="space-y-4 pt-1">
        {projectTypes.map((project) => (
          <div key={project.name}>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-600">{project.name}</span>
              <span className="text-[10px] text-gray-500">{project.count}</span>
            </div>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-gray-100">
              <div className={`h-full rounded-full ${project.color}`} style={{ width: project.width }} />
            </div>
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
  const names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const totalDays = new Date(year, month + 1, 0).getDate();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;

  function changeMonth(amount) {
    const date = new Date(year, month + amount, 1);
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setSelectedDay(1);
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month" className="text-gray-400"><ChevronLeft size={15} /></button>
        <h3 className="text-[11px] font-semibold text-gray-700">{names[month]} {year}</h3>
        <button type="button" onClick={() => changeMonth(1)} aria-label="Next month" className="text-gray-400"><ChevronRight size={15} /></button>
      </div>
      <div className="mb-3 grid grid-cols-7 text-center text-[8px] text-gray-400">{["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => <span key={d}>{d}</span>)}</div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {Array.from({ length: firstDay }, (_, i) => <span key={`blank-${i}`} />)}
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <button key={day} type="button" onClick={() => setSelectedDay(day)} className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full text-[9px] ${selectedDay === day ? "bg-green-600 font-semibold text-white" : "text-gray-500 hover:bg-emerald-50"}`}>{day}</button>
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
            <p className="mb-2 text-[9px] text-gray-400">{group.date}</p>
            <div className="space-y-3">
              {group.items.map(([time, name, action, id], i) => (
                <div key={`${group.date}-${time}-${id}`} className="grid grid-cols-[30px_minmax(0,1fr)] gap-2">
                  <span className="pt-1 text-[9px] text-gray-500">{time}</span>
                  <div className={`flex min-w-0 gap-2 border-l-2 pl-2 ${i === 3 ? "border-amber-400" : i === 1 ? "border-teal-400" : "border-green-500"}`}>
                    <img src={profileImage} alt="" className="mt-0.5 h-5 w-5 shrink-0 rounded-full object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-[9px] font-medium text-gray-700">{name}</p>
                      <p className="mt-1 text-[9px] text-gray-500">{action} <span className="font-semibold text-green-600">{id}</span></p>
                      <p className="text-[8px] text-gray-400">2 min ago</p>
                    </div>
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
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  return (
    <Card>
      <CardHeading>Posting Tasks</CardHeading>
      <p className="mb-3 text-[9px] leading-5 text-gray-500">
        Immediate tasks: <span className="underline">Wednesday at 10AM</span> / <span className="underline">Wednesday at 4PM</span> / <span className="inline-flex items-center gap-1 underline"><Zap size={10} className="text-amber-500" />Important</span>
      </p>
      <div className="overflow-x-auto">
        <div className="min-w-[520px]">
          <div className="mb-1 grid grid-cols-[24px_repeat(24,minmax(0,1fr))] gap-1">
            <span />
            {hours.map((h) => <span key={h} className="text-center text-[7px] text-gray-400">{h === 0 ? "12AM" : h < 12 ? `${h}AM` : h === 12 ? "12PM" : `${h - 12}PM`}</span>)}
          </div>
          <div className="space-y-1">
            {days.map((day, di) => (
              <div key={day} className="grid grid-cols-[24px_repeat(24,minmax(0,1fr))] gap-1">
                <span className="flex items-center text-[8px] text-gray-400">{day}</span>
                {hours.map((hour) => {
                  const active = activeHours[di].includes(hour);
                  const important = active && (hour + di) % 3 === 0;
                  return <div key={`${day}-${hour}`} title={`${day} ${hour}:00`} className={`flex h-4 items-center justify-center rounded-[2px] ${important ? "bg-teal-400 text-white" : active ? "bg-teal-100" : "bg-gray-50"}`}>{important && <Zap size={9} />}</div>;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ProjectDashboardV2() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [addedTasks, setAddedTasks] = useState([]);

  function handleAddTask(event) {
    event.preventDefault();
    const task = newTask.trim();
    if (!task) return;
    setAddedTasks((old) => [...old, task]);
    setNewTask("");
    setShowTaskModal(false);
  }

  return (
    <div className="mx-auto min-w-0 max-w-[1500px] bg-gray-50 pb-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="mb-1 text-[10px] text-gray-400">Dashboard / Projects</p>
          <h1 className="text-lg font-semibold text-gray-800">Overview</h1>
        </div>
        <button type="button" onClick={() => setShowTaskModal(true)} className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-green-700">
          <Plus size={15} /> Add Task
        </button>
      </div>

      {/* Figma layout: summary and projects, statistics, calendar, then task panels */}
      <div className="grid min-w-0 grid-cols-1 items-start gap-3 xl:grid-cols-12">
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 xl:col-span-5">
          <div className="grid grid-cols-2 gap-3 sm:col-span-1 sm:grid-cols-1">
            <StatCard value="780" label="Total Tasks" />
            <StatCard value="540" label="New Tasks" tone="teal" />
          </div>
          <div className="min-w-0 sm:col-span-2">
            <ProjectsDonut />
          </div>
        </div>

        <div className="min-w-0 xl:col-span-4">
          <Statistics />
        </div>

        <div className="min-w-0 xl:col-span-3">
          <CalendarCard />
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2 xl:col-span-5">
          <div className="min-w-0">
            <ActiveTasks />
          </div>
          <div className="min-w-0">
            <TotalProjects />
          </div>
          <div className="md:col-span-2">
            <PostingTasks />
          </div>
          {addedTasks.length > 0 && (
            <Card className="md:col-span-2">
              <CardHeading>Added Tasks</CardHeading>
              <ul className="space-y-2">
                {addedTasks.map((task, i) => (
                  <li key={`${task}-${i}`} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle2 size={14} className="text-green-600" /> {task}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        <div className="min-w-0 xl:col-span-4">
          <RecentActivity />
        </div>
      </div>

      {showTaskModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowTaskModal(false); }}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-800">Add Task</h2>
              <button type="button" onClick={() => setShowTaskModal(false)} aria-label="Close add task modal" className="rounded p-1 text-gray-400 hover:bg-gray-100"><X size={18} /></button>
            </div>
            <form onSubmit={handleAddTask}>
              <label htmlFor="task-name" className="mb-2 block text-xs font-medium text-gray-600">Task name</label>
              <input id="task-name" autoFocus required value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task" className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
              <div className="mt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setShowTaskModal(false)} className="rounded-md border border-gray-200 px-4 py-2 text-xs text-gray-600">Cancel</button>
                <button type="submit" className="rounded-md bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

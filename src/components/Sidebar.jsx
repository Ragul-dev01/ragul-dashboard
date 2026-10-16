
import {
  LayoutDashboard,
  UserRound,
  ChartNoAxesColumnIncreasing,
  ListTodo,
  ShoppingCart,
  CalendarDays,
  Mail,
  MessageCircle,
  FolderKanban,
  Files,
  StickyNote,
  Users,
  Search,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import flowerLogo from "../assets/flower-logo.png";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  {
    name: "Profile Dashboard",
    icon: UserRound,
    path: "/profile-dashboard",
  },
  {
    name: "Figma Dashboard",
    icon: LayoutDashboard,
    path: "/figma-dashboard",
  },
  {
    name: "Analytics Dashboard",
    icon: ChartNoAxesColumnIncreasing,
    path: "/analytics-dashboard",
  },
  { name: "Task", icon: ListTodo, path: null },
  { name: "E-Commerce", icon: ShoppingCart, path: "/e-commerce" },
  { name: "Calendar", icon: CalendarDays, path: "/calendar" },
  { name: "Mail", icon: Mail, path: "/mail", badge: "8" },
  { name: "Chat", icon: MessageCircle, path: "/chat" },
  { name: "Projects", icon: FolderKanban, path: "/projects" },
  { name: "File Manager", icon: Files, path: "/file-manager" },
  { name: "Notes", icon: StickyNote, path: "/notes" },
  { name: "Contacts", icon: Users, path: "/contacts" },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-gray-200 bg-white px-4 py-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 px-3">
        <img
          src={flowerLogo}
          alt="Flower Logo"
          className="h-7 w-7 rounded-full object-contain"
        />
        <h1 className="text-xl font-bold text-gray-800">FLOWER</h1>
      </div>

      {/* Search */}
      <div className="mb-5 flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2.5">
        <Search size={16} className="shrink-0 text-gray-500" />
        <input
          type="text"
          placeholder="Search anything"
          aria-label="Search anything"
          className="w-full min-w-0 bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Menu heading */}
      <p className="mb-3 px-3 text-[11px] font-medium uppercase tracking-wider text-gray-400">
        Main Menu
      </p>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.path
            ? location.pathname === item.path
            : false;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
              }}
              aria-current={isActive ? "page" : undefined}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                isActive
                  ? "bg-emerald-100 font-semibold text-emerald-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} strokeWidth={1.8} />

              <span className="flex-1 text-left">{item.name}</span>

              {item.badge && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

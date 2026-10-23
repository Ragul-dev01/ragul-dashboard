
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
  Menu,
  X,
  Wallet,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  {
    name: "Project Dashboard",
    icon: FolderKanban,
    path: "/project-dashboard",
  },
  {
    name: "Project Dashboard V2",
    icon: ChartNoAxesColumnIncreasing,
    path: "/project-dashboard-v2",
  },
  {
    name: "Finance Dashboard",
    icon: Wallet,
    path: "/finance-dashboard",
  },
  { name: "Task", icon: ListTodo, path: null },
  { name: "E-Commerce", icon: ShoppingCart, path: null },
  { name: "Calendar", icon: CalendarDays, path: null },
  { name: "Mail", icon: Mail, path: null, badge: "8" },
  { name: "Chat", icon: MessageCircle, path: null },
  { name: "Projects", icon: FolderKanban, path: null },
  { name: "File Manager", icon: Files, path: null },
  { name: "Notes", icon: StickyNote, path: null },
  { name: "Contacts", icon: Users, path: null },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigation = (item) => {
    if (!item.path) return;

    navigate(item.path);
    setMobileOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen((previous) => !previous)}
        aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
        className="fixed left-3 top-3 z-50 rounded-lg bg-white p-2 text-gray-700 shadow-md md:hidden"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen w-64 shrink-0 flex-col border-r border-gray-200 bg-white px-4 py-4 transition-transform duration-200 md:sticky md:top-0 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex h-10 shrink-0 items-center gap-3 px-3">
          <img
            src={flowerLogo}
            alt="Flower Logo"
            className="h-7 w-7 rounded-full object-contain"
          />
          <h1 className="text-xl font-bold text-gray-800">FLOWER</h1>
        </div>

        <div className="mb-5 flex shrink-0 items-center gap-2 rounded-lg bg-gray-100 px-3 py-2.5">
          <Search size={16} className="shrink-0 text-gray-500" />

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search anything"
            aria-label="Search menu"
            className="w-full min-w-0 bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-500"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
              className="text-gray-400 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <p className="mb-3 shrink-0 px-3 text-[11px] font-medium uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto pb-4">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.path !== null && location.pathname === item.path;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item)}
                aria-current={isActive ? "page" : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-100 font-semibold text-emerald-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span className="min-w-0 flex-1 truncate text-left">
                  {item.name}
                </span>

                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {filteredItems.length === 0 && (
            <p className="px-3 py-4 text-xs text-gray-400">
              No menu items found.
            </p>
          )}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

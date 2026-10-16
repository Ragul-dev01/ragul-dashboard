
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  UserRound,
  Mail,
  ListTodo,
  Settings,
  LockKeyhole,
  LogOut,
  X,
  Check,
} from "lucide-react";

import profileImage from "../assets/profile.png";

const notifications = [
  { id: 1, name: "Regina Cooper", time: "1 min ago", unread: true },
  { id: 2, name: "Judith Black", time: "5 min ago", unread: false },
  { id: 3, name: "Ronald Robertson", time: "3 hours ago", unread: false },
  { id: 4, name: "Dustin Williamson", time: "15 hours ago", unread: false },
  { id: 5, name: "Calvin Flores", time: "Yesterday", unread: false },
  { id: 6, name: "Robert Edwards", time: "Yesterday", unread: false },
];

const profileMenuItems = [
  { label: "My Profile", icon: UserRound },
  { label: "My Messages", icon: Mail },
  { label: "My Tasks", icon: ListTodo },
  { label: "Settings", icon: Settings, divider: true },
  { label: "Lock Screen", icon: LockKeyhole },
  { label: "Logout", icon: LogOut, divider: true },
];

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [unreadNotifications, setUnreadNotifications] = useState(1);
  const [readNotifications, setReadNotifications] = useState([]);
  const [dismissedNotifications, setDismissedNotifications] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((current) =>
      current === dropdown ? null : dropdown
    );
  };

  const visibleNotifications = notifications.filter(
    (item) => !dismissedNotifications.includes(item.id)
  );

  const markAllAsRead = () => {
    setReadNotifications(notifications.map((item) => item.id));
    setUnreadNotifications(0);
  };

  const dismissNotification = (id) => {
    setDismissedNotifications((previous) => [...previous, id]);
    setReadNotifications((previous) => [...previous, id]);

    if (!readNotifications.includes(id)) {
      setUnreadNotifications((count) => Math.max(0, count - 1));
    }
  };

  const handleProfileMenuClick = (label) => {
    setActiveDropdown(null);

    // Menu UI is ready. Connect these options to pages/actions later.
    if (label === "Logout") {
      // Add logout logic here when authentication is implemented.
    }
  };

  return (
    <header className="relative z-30 flex h-[72px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
      {/* Left section */}
      <button
        type="button"
        aria-label="Toggle sidebar"
        className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
      >
        <Menu size={22} strokeWidth={1.8} />
      </button>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4" ref={dropdownRef}>
        {/* Search */}
        <button
          type="button"
          aria-label="Search"
          className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
        >
          <Search size={19} strokeWidth={1.8} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            aria-label="Notifications"
            aria-expanded={activeDropdown === "notifications"}
            onClick={() => toggleDropdown("notifications")}
            className={`relative rounded-full p-2 transition ${
              activeDropdown === "notifications"
                ? "bg-gray-100 text-green-700"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Bell size={19} strokeWidth={1.8} />

            {unreadNotifications > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-500 px-1 text-[8px] font-semibold text-white">
                {unreadNotifications}
              </span>
            )}
          </button>

          {activeDropdown === "notifications" && (
            <section className="absolute right-[-65px] top-full z-50 mt-3 w-[min(320px,calc(100vw-24px))] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl sm:right-0">
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                <h2 className="text-xs font-semibold text-gray-700">
                  Notifications
                </h2>

                <div className="flex items-center gap-2">
                  {unreadNotifications > 0 && (
                    <span className="flex h-4 min-w-4 items-center justify-center rounded bg-red-500 px-1 text-[9px] font-semibold text-white">
                      {unreadNotifications}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={markAllAsRead}
                    title="Mark all as read"
                    aria-label="Mark all notifications as read"
                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-green-600"
                  >
                    <Check size={14} />
                  </button>
                </div>
              </div>

              <div className="max-h-[360px] overflow-y-auto py-1">
                {visibleNotifications.map((item) => (
                  <div
                    key={item.id}
                    className={`group flex items-center gap-2 px-3 py-2.5 transition hover:bg-gray-50 ${
                      item.unread && !readNotifications.includes(item.id)
                        ? "bg-green-50/30"
                        : ""
                    }`}
                  >
                    <img
                      src={profileImage}
                      alt=""
                      className="h-8 w-8 shrink-0 rounded-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setReadNotifications((previous) =>
                          previous.includes(item.id)
                            ? previous
                            : [...previous, item.id]
                        );

                        if (
                          item.unread &&
                          !readNotifications.includes(item.id)
                        ) {
                          setUnreadNotifications((count) =>
                            Math.max(0, count - 1)
                          );
                        }
                      }}
                      className="min-w-0 flex-1 text-left"
                    >
                      <p className="truncate text-[11px] font-medium text-gray-700">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[10px] text-gray-400">
                        {item.time}
                      </p>
                    </button>

                    {item.unread &&
                      !readNotifications.includes(item.id) && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      )}

                    <button
                      type="button"
                      aria-label={`Dismiss ${item.name} notification`}
                      onClick={() => dismissNotification(item.id)}
                      className="rounded p-1 text-gray-300 opacity-0 transition hover:bg-gray-200 hover:text-gray-600 group-hover:opacity-100 focus:opacity-100"
                    >
                      <X size={13} />
                    </button>
                  </div>
                ))}

                {visibleNotifications.length === 0 && (
                  <p className="px-4 py-8 text-center text-xs text-gray-400">
                    No notifications
                  </p>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Profile menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown("profile")}
            aria-expanded={activeDropdown === "profile"}
            className="flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition hover:bg-gray-100 sm:px-2"
          >
            <img
              src={profileImage}
              alt="ArtTemplate profile"
              className="h-8 w-8 rounded-full object-cover"
            />

            <span className="hidden text-xs font-medium text-gray-700 sm:block">
              ArtTemplate
            </span>

            <ChevronDown
              size={14}
              className={`hidden text-gray-500 transition-transform sm:block ${
                activeDropdown === "profile" ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeDropdown === "profile" && (
            <section className="absolute right-0 top-full z-50 mt-3 w-[230px] overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
              {/* Profile header */}
              <div className="flex items-center gap-3 border-b border-gray-100 px-2 py-3">
                <img
                  src={profileImage}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-gray-700">
                    ArtTemplate
                  </p>
                  <p className="text-[10px] text-gray-400">Manager</p>
                </div>

                <span className="h-2 w-2 rounded-full bg-red-500" />
              </div>

              {/* Menu items */}
              <div className="py-1">
                {profileMenuItems.map(({ label, icon: Icon, divider }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleProfileMenuClick(label)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[11px] text-gray-600 transition hover:bg-gray-100 hover:text-green-700 ${
                      divider ? "mt-1 border-t border-gray-100 pt-3" : ""
                    }`}
                  >
                    <Icon size={14} strokeWidth={1.7} />
                    <span className="flex-1">{label}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

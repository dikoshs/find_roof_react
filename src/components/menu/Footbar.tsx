import { NavLink } from "react-router-dom";
import { Home, Map, Wallet, Heart, User } from "lucide-react";

type Item = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  { to: "/map",      label: "Map",      icon: <Map size={22} /> },
  { to: "/balance",  label: "Balance",  icon: <Wallet size={22} /> },
  { to: "/",         label: "Home",     icon: <Home size={22} /> },
  { to: "/favorite", label: "Favorite", icon: <Heart size={22} /> },
  { to: "/profile",  label: "Profile",  icon: <User size={22} /> },
];

export default function Footbar() {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white/95 backdrop-blur border-t border-gray-200
        dark:bg-zinc-900/90 dark:border-zinc-800
      "
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // для вырезов на iOS
    >
      <ul className="mx-auto grid max-w-md grid-cols-5 gap-1 py-2">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `
                flex flex-col items-center justify-center gap-1 py-1
                text-[11px] font-medium transition-colors
                ${isActive
                  ? "text-teal-700 dark:text-teal-400"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                }
              `
              }
            >
              <div className="h-6 flex items-center">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

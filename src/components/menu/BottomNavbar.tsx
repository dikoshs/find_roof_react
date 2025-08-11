import { CalendarDays, Dumbbell, Home, LogIn, LogOut, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../../redux/store";

const BottomNavbar = () => {
  const location = useLocation();

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const navItems = [
    { path: "/", label: "Главная", icon: <Home /> },
    { path: "/schedule", label: "Расписание", icon: <CalendarDays /> },
    isAuthenticated
      ? { path: "/logout", label: "Выход", icon: <LogOut /> }
      : { path: "/login", label: "Вход", icon: <LogIn /> },
    { path: "/shop", label: "Магазин", icon: <ShoppingCart /> },
    { path: "/assistant", label: "Ассистент", icon: <Dumbbell /> },
  ];


  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300">
      <div className="flex justify-around py-3">
        {navItems.map((item) => {
          // const isActive = location.pathname === item.path;
          const isActive = true;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center text-sm ${
                isActive ? "text-[#7171DC]" : "text-gray-500"
              }`}
            >
              <span className="w-6 h-6">{item.icon}</span>
              <span className="text-[10px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;

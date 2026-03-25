import { NavLink, useNavigate } from "react-router-dom";
import { BookOpen, BarChart3, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white";
const activeLinkClass = "bg-white/15 text-white";

export function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 shadow-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-lg">▦</span>
          <span className="text-lg font-semibold tracking-tight">DSA Sheet</span>
        </div>

        <nav className="flex flex-1 justify-center gap-1 sm:justify-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}
          >
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Sheet
            </span>
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}
          >
            <span className="inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Stats
            </span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden max-w-[160px] truncate text-sm text-white/90 sm:block" title={user?.name}>
            <span className="font-medium">{user?.name ?? user?.username}</span>
          </div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="gap-2 bg-white/15 text-white hover:bg-white/25"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

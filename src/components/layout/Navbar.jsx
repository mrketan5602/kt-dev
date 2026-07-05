import { NavLink } from "react-router-dom";
import { Search, Moon, Menu } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Toolkit", path: "/toolkit" },
  { name: "Resources", path: "/resources" },
  { name: "AI", path: "/ai" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
            K
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              kt<span className="text-indigo-500">.</span>dev
            </h1>

            <p className="text-xs text-zinc-500">
              Student Toolkit
            </p>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-indigo-400"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          <button className="rounded-xl border border-zinc-800 p-2 hover:border-indigo-500">
            <Search size={18} />
          </button>

          <button className="rounded-xl border border-zinc-800 p-2 hover:border-indigo-500">
            <Moon size={18} />
          </button>

          <button className="rounded-xl border border-zinc-800 p-2 md:hidden">
            <Menu size={18} />
          </button>

        </div>

      </nav>
    </header>
  );
}
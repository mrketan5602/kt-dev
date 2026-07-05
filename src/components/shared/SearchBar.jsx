import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-3xl">

      <div className="flex items-center rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 shadow-lg transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/30">

        <Search className="mr-3 text-zinc-500" size={22} />

        <input
          type="text"
          placeholder="Search calculators, notes, tools..."
          className="w-full bg-transparent text-lg text-white placeholder:text-zinc-500 outline-none"
        />

      </div>

    </div>
  );
}
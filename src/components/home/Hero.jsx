import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import SearchBar from "../shared/SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">

        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          <Sparkles size={16} />
          Built for BCA & Computer Science Students
        </div>

        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">

          Everything a

          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

            Computer Science Student

          </span>

          Needs.

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

          Academic calculators, coding utilities,
          AI assistant, notes, previous year papers,
          interview preparation, resume builder,
          cheat sheets and much more.

        </p>

        {/* Search */}

        <SearchBar />

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-indigo-500">

            Explore Tools

            <ArrowRight size={18} />

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-7 py-4 font-semibold transition hover:bg-zinc-800">

            <BookOpen size={18} />

            Browse Resources

          </button>

        </div>

      </div>

    </section>
  );
}
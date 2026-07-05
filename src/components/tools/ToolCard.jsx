import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ToolCard({
  icon,
  title,
  description,
  category,
  slug,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/tools/${slug}`)}
      className="cursor-pointer group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="mb-4 text-3xl">{icon}</div>

      <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
        {category}
      </span>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-indigo-400 group-hover:gap-3 transition">
        Open Tool
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}
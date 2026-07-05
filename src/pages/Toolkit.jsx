import { useState } from "react";
import ToolCard from "../components/tools/ToolCard";
import { tools } from "../data/tools";

export default function Toolkit() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(tools.map(t => t.category))];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">

      <h1 className="text-5xl font-bold">Toolkit</h1>

      <p className="text-zinc-400 mt-3">
        Search and explore all student tools.
      </p>

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tools..."
        className="mt-8 w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-indigo-500"
      />

      {/* Categories */}
      <div className="flex gap-3 flex-wrap mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              category === cat
                ? "bg-indigo-600 border-indigo-500"
                : "border-zinc-700 text-zinc-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            icon={tool.icon}
            title={tool.name}
            description={tool.description}
            category={tool.category}
            slug={tool.slug}
          />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-zinc-500 mt-10">
          No tools found.
        </p>
      )}

    </main>
  );
}
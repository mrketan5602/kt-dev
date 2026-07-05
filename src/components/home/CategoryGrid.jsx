import { categories } from "../../data/categories";

export default function CategoryGrid() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Explore Categories
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:-translate-y-1 hover:border-indigo-500 hover:bg-zinc-800"
            >
              <Icon className={`${category.color} mb-4`} size={32} />

              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {category.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
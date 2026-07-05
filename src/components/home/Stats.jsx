const stats = [
  { number: "15+", label: "Useful Tools" },
  { number: "500+", label: "Students" },
  { number: "10+", label: "Resources" },
  { number: "100%", label: "Free" },
];

export default function Stats() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-indigo-400">
              {item.number}
            </h3>
            <p className="mt-2 text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { ShieldCheck, Zap, Smartphone, Brain } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast",
    desc: "Everything opens instantly.",
  },
  {
    icon: Brain,
    title: "Smart",
    desc: "Useful tools curated for students.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    desc: "Works on every device.",
  },
  {
    icon: ShieldCheck,
    title: "Free",
    desc: "No subscriptions. No ads.",
  },
];

export default function WhyChoose() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">

      <h2 className="text-center text-4xl font-bold">

        Why choose
        <span className="text-indigo-500"> kt.dev</span>?

      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:-translate-y-2 hover:border-indigo-500"
            >
              <Icon className="mb-5 text-indigo-400" size={34} />

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.desc}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}
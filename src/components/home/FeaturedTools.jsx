import {
  Calculator,
  GraduationCap,
  CalendarCheck,
  FileText,
  Braces,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

const tools = [
  {
    title: "SGPA Calculator",
    description: "Calculate your semester GPA instantly.",
    icon: Calculator,
  },
  {
    title: "CGPA Calculator",
    description: "Track your overall academic performance.",
    icon: GraduationCap,
  },
  {
    title: "Attendance Calculator",
    description: "Know how many classes you can miss.",
    icon: CalendarCheck,
  },
  {
    title: "Resume Builder",
    description: "Create a professional resume in minutes.",
    icon: FileText,
  },
  {
    title: "JSON Formatter",
    description: "Format and validate JSON instantly.",
    icon: Braces,
  },
  {
    title: "Password Generator",
    description: "Generate secure passwords quickly.",
    icon: KeyRound,
  },
];

export default function FeaturedTools() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white">
          Featured Tools
        </h2>

        <p className="mt-3 text-zinc-400">
          The most frequently used tools by students.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10">
                <Icon className="text-indigo-400" size={28} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {tool.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {tool.description}
              </p>

              <button className="mt-6 flex items-center gap-2 text-indigo-400 transition group-hover:gap-3">
                Open Tool
                <ArrowUpRight size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
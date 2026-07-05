export default function ResultCard({
  totalSubjects,
  totalCredits,
  totalPoints,
  sgpa,
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-white">
        📊 Result Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-zinc-400">Subjects</span>
          <span className="font-semibold">{totalSubjects}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Credits</span>
          <span className="font-semibold">{totalCredits}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Grade Points</span>
          <span className="font-semibold">{totalPoints}</span>
        </div>

      </div>

      <div className="mt-8 rounded-xl bg-indigo-600/10 p-6 text-center border border-indigo-500/20">

        <p className="text-zinc-400 uppercase tracking-widest text-sm">
          SGPA
        </p>

        <h1 className="mt-2 text-6xl font-black text-indigo-400">
          {sgpa}
        </h1>

      </div>
    </div>
  );
}
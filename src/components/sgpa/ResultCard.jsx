export default function ResultCard({
  totalSubjects,
  totalCredits,
  totalPoints,
  sgpa,
}) {
  const score = Number(sgpa);

  let remark = "Needs Improvement";

  if (score >= 9) remark = "🏆 Outstanding";
  else if (score >= 8) remark = "🌟 Excellent";
  else if (score >= 7) remark = "👍 Very Good";
  else if (score >= 6) remark = "🙂 Good";

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg sticky top-24">

      <h2 className="mb-6 text-2xl font-bold">
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

      <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-600/10 p-6 text-center">

        <p className="text-sm uppercase tracking-widest text-zinc-400">
          SGPA
        </p>

        <h1 className="mt-2 text-6xl font-black text-indigo-400">
          {sgpa}
        </h1>

        <p className="mt-3 text-lg text-zinc-300">
          {remark}
        </p>

      </div>

    </div>
  );
}
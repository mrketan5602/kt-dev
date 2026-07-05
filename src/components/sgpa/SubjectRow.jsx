import GradeSelect from "./GradeSelect";

export default function SubjectRow({
  subject,
  index,
  onChange,
  onRemove,
  canRemove,
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all hover:border-indigo-500 hover:shadow-indigo-500/10">

      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          📘 Subject {index + 1}
        </h3>

        <button
          disabled={!canRemove}
          onClick={() => onRemove(index)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            canRemove
              ? "bg-red-600 hover:bg-red-500"
              : "cursor-not-allowed bg-zinc-700 text-zinc-400"
          }`}
        >
          🗑 Remove
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">

        {/* Subject Name */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Subject Name
          </label>

          <input
            type="text"
            value={subject.name}
            placeholder="e.g. Data Structures"
            onChange={(e) =>
              onChange(index, "name", e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Credits */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Credits
          </label>

          <input
            type="number"
            min="0"
            max="10"
            required
            value={subject.credits}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value >= 0 && value <= 10) {
                onChange(index, "credits", value);
              }
            }}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Grade */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Grade
          </label>

          <GradeSelect
            value={subject.grade}
            onChange={(value) =>
              onChange(index, "grade", value)
            }
          />
        </div>

      </div>

    </div>
  );
}
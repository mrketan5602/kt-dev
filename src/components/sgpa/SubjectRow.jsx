import GradeSelect from "./GradeSelect";

export default function SubjectRow({
  subject,
  index,
  onChange,
  onRemove,
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <h3 className="mb-4 text-lg font-semibold text-white">
        Subject {index + 1}
      </h3>

      <div className="grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Subject Name"
          value={subject.name}
          onChange={(e) =>
            onChange(index, "name", e.target.value)
          }
          className="rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-indigo-500"
        />

        <input
          type="number"
          min="1"
          value={subject.credits}
          onChange={(e) =>
            onChange(index, "credits", Number(e.target.value))
          }
          className="rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-indigo-500"
        />

        <GradeSelect
          value={subject.grade}
          onChange={(value) =>
            onChange(index, "grade", value)
          }
        />

      </div>

      <button
        onClick={() => onRemove(index)}
        className="mt-4 rounded-xl bg-red-600 px-4 py-2 transition hover:bg-red-500"
      >
        Remove
      </button>

    </div>
  );
}
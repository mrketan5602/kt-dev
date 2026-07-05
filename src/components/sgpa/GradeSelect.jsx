import { gradePoints } from "../../lib/gradePoints";

export default function GradeSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-indigo-500"
    >
      {Object.keys(gradePoints).map((grade) => (
        <option key={grade} value={grade}>
          {grade}
        </option>
      ))}
    </select>
  );
}
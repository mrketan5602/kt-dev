import { useState } from "react";
import { gradePoints } from "../lib/gradePoints";

const createSubject = () => ({
  credits: 4,
  grade: "O",
});

export default function SGPA() {
  const [subjects, setSubjects] = useState(
    Array.from({ length: 6 }, createSubject)
  );

  const updateSubject = (index, key, value) => {
    const updated = [...subjects];
    updated[index][key] = value;
    setSubjects(updated);
  };

  const addSubject = () => {
    setSubjects([...subjects, createSubject()]);
  };

  const removeSubject = (index) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const totalCredits = subjects.reduce(
    (sum, s) => sum + Number(s.credits),
    0
  );

  const earnedPoints = subjects.reduce(
    (sum, s) => sum + Number(s.credits) * gradePoints[s.grade],
    0
  );

  const sgpa =
    totalCredits > 0 ? (earnedPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div className="max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold mb-8">
        SGPA Calculator
      </h2>

      <div className="space-y-4">

        {subjects.map((subject, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 bg-zinc-800 p-4 rounded-xl"
          >

            <input
              type="number"
              min="1"
              value={subject.credits}
              onChange={(e) =>
                updateSubject(index, "credits", e.target.value)
              }
              className="rounded-lg bg-zinc-900 p-3 outline-none"
            />

            <select
              value={subject.grade}
              onChange={(e) =>
                updateSubject(index, "grade", e.target.value)
              }
              className="rounded-lg bg-zinc-900 p-3"
            >
              {Object.keys(gradePoints).map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>

            <button
              onClick={() => removeSubject(index)}
              className="rounded-lg bg-red-600 hover:bg-red-500"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      <button
        onClick={addSubject}
        className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 hover:bg-indigo-500"
      >
        + Add Subject
      </button>

      <div className="mt-10 rounded-xl border border-zinc-700 bg-zinc-900 p-6">

        <p className="text-zinc-400">Total Credits</p>
        <h3 className="text-3xl font-bold">
          {totalCredits}
        </h3>

        <p className="mt-6 text-zinc-400">Your SGPA</p>
        <h1 className="text-6xl font-extrabold text-indigo-400">
          {sgpa}
        </h1>

      </div>

    </div>
  );
}
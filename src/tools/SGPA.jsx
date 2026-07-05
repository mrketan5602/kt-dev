import { useState } from "react";

import SubjectRow from "../components/sgpa/SubjectRow";
import ResultCard from "../components/sgpa/ResultCard";
import { gradePoints } from "../lib/gradePoints";

const createSubject = () => ({
  name: "",
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
    if (subjects.length === 1) return;

    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const resetCalculator = () => {
    setSubjects(Array.from({ length: 6 }, createSubject));
  };

  const totalSubjects = subjects.length;

  const totalCredits = subjects.reduce(
    (sum, subject) => sum + Number(subject.credits || 0),
    0
  );

  const totalPoints = subjects.reduce(
    (sum, subject) =>
      sum +
      Number(subject.credits || 0) *
        (gradePoints[subject.grade] || 0),
    0
  );

  const sgpa =
    totalCredits > 0
      ? (totalPoints / totalCredits).toFixed(2)
      : "0.00";

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            🎓 SGPA Calculator
          </h1>

          <p className="mt-3 text-zinc-400">
            Calculate your Semester Grade Point Average instantly.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">

            {subjects.map((subject, index) => (
              <SubjectRow
                key={index}
                subject={subject}
                index={index}
                onChange={updateSubject}
                onRemove={removeSubject}
                canRemove={subjects.length > 1}
              />
            ))}

            <div className="flex flex-wrap gap-4">

              <button
                onClick={addSubject}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
              >
                ➕ Add Subject
              </button>

              <button
                onClick={resetCalculator}
                className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
              >
                🔄 Reset
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <ResultCard
              totalSubjects={totalSubjects}
              totalCredits={totalCredits}
              totalPoints={totalPoints}
              sgpa={sgpa}
            />

          </div>

        </div>

      </div>
    </main>
  );
}
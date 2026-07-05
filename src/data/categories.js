import {
  GraduationCap,
  Code2,
  Briefcase,
  BookOpen,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    title: "Academic",
    description: "SGPA, CGPA, Attendance",
    icon: GraduationCap,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Programming",
    description: "Compiler, JSON, Regex",
    icon: Code2,
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Career",
    description: "Resume, Interview Prep",
    icon: Briefcase,
    color: "text-orange-400",
  },
  {
    id: 4,
    title: "Resources",
    description: "Notes & PYQs",
    icon: BookOpen,
    color: "text-purple-400",
  },
];
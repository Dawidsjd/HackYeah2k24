import { ExamType } from "../../type";
import { FullExcercises } from "../Exercises/CoursesExcercises";

// Tablica egzaminów, łącząca ćwiczenia z odpowiednich modułów
export const Exams: ExamType[] = [
  {
    id: 0,
    exercises: [
      ...FullExcercises[0],
      ...FullExcercises[1],
      ...FullExcercises[2],
    ], // Łączenie ćwiczeń z modułów 1-3
    title: "Modules 1-3",
  },
  {
    id: 1,
    exercises: [
      ...FullExcercises[3],
      ...FullExcercises[4],
      ...FullExcercises[5],
    ], // Łączenie ćwiczeń z modułów 4-6
    title: "Modules 4-6",
  },
  {
    id: 2,
    exercises: [
      ...FullExcercises[6],
      ...FullExcercises[7],
      ...FullExcercises[8],
    ], // Łączenie ćwiczeń z modułów 7-9
    title: "Modules 7-9",
  },
];

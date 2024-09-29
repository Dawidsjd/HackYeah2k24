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
    title: "What Are Cryptocurrencies and basics of them.",
  },
  {
    id: 1,
    exercises: [
      ...FullExcercises[3],
      ...FullExcercises[4],
      ...FullExcercises[5],
    ], // Łączenie ćwiczeń z modułów 4-6
    title: "Investments Basics",
  },
  {
    id: 2,
    exercises: [
      ...FullExcercises[6],
      ...FullExcercises[7],
      ...FullExcercises[8],
    ], // Łączenie ćwiczeń z modułów 7-9
    title: "Advanced Investments",
  },
];

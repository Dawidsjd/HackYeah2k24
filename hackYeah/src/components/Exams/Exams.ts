import { ExamType } from "../../type";
import { FullExcercises } from "../Exercises/CoursesExcercises";

export const Exams: ExamType[] = [
  {
    id: 0,
    exercises: FullExcercises[0]
      .concat(FullExcercises[1])
      .concat(FullExcercises[2]),
    title: "Modules 1-3",
  },
  {
    id: 1,
    exercises: FullExcercises[3]
      .concat(FullExcercises[4])
      .concat(FullExcercises[5]),
    title: "Modules 4-6",
  },
  {
    id: 2,
    exercises: FullExcercises[6]
      .concat(FullExcercises[7])
      .concat(FullExcercises[8]),
    title: "Modules 7-9",
  },
];

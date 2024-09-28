import { ExamType } from "../../type";
import * as m from "../Exercises/CoursesExcercises";

export const Exams: ExamType[] = [
  {
    id: 0,
    exercises: m.ModuleOneExcercises.concat(m.ModuleTwoExcercises).concat(
      m.ModuleThreeExcercises
    ),
    title: "Modules 1-3",
  },
  {
    id: 1,
    exercises: m.ModuleFourExcercises.concat(m.ModuleFiveExcercises).concat(
      m.ModuleSixExcercises
    ),
    title: "Modules 4-6",
  },
  {
    id: 2,
    exercises: m.ModuleOneExcercises.concat(m.ModuleTwoExcercises).concat(
      m.ModuleThreeExcercises
    ),
    title: "Modules 7-9",
  },
];

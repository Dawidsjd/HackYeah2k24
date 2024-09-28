export type ExerciseType = {
  falseAnswers: string[];
  correctAnswer: string;
  question: string;
};

export type ExamType = {
  exercises: ExerciseType[];
  title: string;
};

export type ExerciseProps = {
  exercise: ExerciseType;
  onAnswer: Function;
};

export type CourseType = {
  id: number;
  title: String;
  introduction: String;
  mainArticlePartOne: String;
  mainArticlePartTwo: String;
  levelOfAdvancement: number;
  linkToArticle: String;
};

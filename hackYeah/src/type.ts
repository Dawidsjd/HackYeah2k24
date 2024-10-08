export type ExerciseType = {
  falseAnswers: string[];
  correctAnswer: string;
  question: string;
};

export type ExerciseProps = {
  exercise: ExerciseType;
  onAnswer: any;
};

export type ExamType = {
  id: number;
  exercises: ExerciseType[];
  title: string;
};

export type ExamProps = {
  exercises: ExerciseType[];
  title: string;
  onEnd: any;
  knowledgeTest?: boolean;
};

export type CourseType = {
  id: number;
  image: string;
  title: string;
  introduction: string;
  mainArticle: string;
  levelOfAdvancement: number;
};

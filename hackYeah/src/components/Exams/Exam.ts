import { Exercise } from "../Exercises/Exercise";

export class Exam{
    exercises!: Exercise[]
    title!: string

    addExercise(question:string, correct:string, ...falseAns:string[]){
        this.exercises.push(new Exercise(question, correct, ...falseAns))
    }

    
}
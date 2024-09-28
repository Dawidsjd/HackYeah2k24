export class Exercise{
    falseAnswers: string[]
    correctAnswer: string
    question: string

    constructor(question:string, correct:string, ...falseAns:string[]){
        this.correctAnswer = correct
        this.falseAnswers = falseAns
        this.question = question 
    }

    createQuestionTemplate(){
        let falseAnswers:string[] = []
        let temp = this.falseAnswers
        for(let i=0;i<3;i++){
            const random = (Math.random()*1000)%temp.length
            falseAnswers.push(temp[random])
            temp = temp.filter(answer => answer != temp[random])
        }
        return {
            falseAnswers,
            correctAnswer: this.correctAnswer
        }
    }
}

type ExerciseType={
    falseAnswers: string[]
    correctAnswer: string
    question: string
}
export const Exercises: ExerciseType[] =[
    {
        question: "SSADAD",
        correctAnswer: "sadasdasdsa",
        falseAnswers: [
            "asdsadasd",
            "dadsadasd"
        ]
    },
    {
        question: "SS23523532ADAD",
        correctAnswer: "sadasdas23523532532dsa",
        falseAnswers: [
            "asds23523523adasd",
            "dad234243sadasd"
        ]
    },
    {
        question: "SSADAasdajughfD",
        correctAnswer: "sadasghgfhdfgsdddasdsa",
        falseAnswers: [
            "asfdsvgdsadasd",
            "dadrsgdgsgsadasd"
        ]
    },
]
const questions = [
    {
        question: "which is largest animal in the world ?",
        answers:  [
            { text: "Shark",correct: false},
            { text: "Blue whale",correct: true},
            { text: "elephant",correct: false},
            { text: "giraffe",correct: false},
        ]
    },
    {
             question: "which is smallest country in the world",
        answers: [
            { text: "Vatican",correct: true},
            { text: "Bhutan",correct: false},
            { text: "Nepal",correct: false},
            { text: "India",correct: false},
        ]
    },
    {
             question: "which is largest desert in the world",
        answers: [
            { text: "Kalahari",correct: false},
            { text: "Gobi",correct: false},
            { text: "Sahara",correct: false},
            { text: "Antarctica",correct: true},
        ]
    },
    {
             question: "which is smallest continent in the world",
        answers: [
            { text: "Asia",correct: false},
            { text: "Australia",correct: true},
            { text: "Arctic",correct: false},
            { text: "Africa",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML  = "Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

 startQuiz();

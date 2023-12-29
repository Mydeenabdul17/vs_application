const quizData =[
    {
        "question": "Which keyword is used for inheritance in Java?",
        "options": ["extends", "implements", "inherit", "using"],
        "correctAnswer": "extends"
    },
    {
        "question": "What is the default value of the data type 'int' in Java?",
        "options": ["0", "1", "-1", "null"],
        "correctAnswer": "0"
    },
    {
        "question": "Which of the following is not a primitive data type in Java?",
        "options": ["int", "float", "char", "class"],
        "correctAnswer": "class"
    },
    {
        "question": "What is the purpose of the 'super' keyword in Java?",
        "options": ["To access the superclass methods and fields", "To initialize the superclass object", "To refer to the current object", "To define a constant"],
        "correctAnswer": "To access the superclass methods and fields"
    },
    {
        "question": "Which collection class in Java is synchronized?",
        "options": ["ArrayList", "LinkedList", "HashMap", "Vector"],
        "correctAnswer": "Vector"
    }
]
;

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.correctAnswer) {
        score++;
    }

    const options = optionsContainer.querySelectorAll(".option");
    options.forEach((option) => {
        option.disabled = true;
    });

    nextButton.disabled = false;
}

function showResult() {
    resultContainer.innerText = `You scored ${score} out of ${quizData.length} questions.`;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Initial load
loadQuestion();

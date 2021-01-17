var quizContainer = document.getElementById('quiz')
var scoreContainer = document.getElementById('score')
var submitButton = document.getElementById('submit')
var timerEl = document.getElementById('timer')


// Begin quiz and start timer
function startQuiz(){

};

// Timer function
function timer() {
    var 
}

// Question objects array
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: [
            "1. Strings",
            "2. Booleans",
            "3. Alerts",
            "4. Numbers"
        ],
        answer: "3. Alerts"
    },
    {
        question: "The condition of an if / else statement is enclosed within:",
        choices: [
            "1. Quotations",
            "2. Curly Brackets",
            "3. Parentheses",
            "4. Square Brackets"
        ],
        answer: "3. Parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        choices: [
            "1. Numbers and strings",
            "2. Other arrays",
            "3. Booleans",
            "4. All of the above"
        ],
        answer: "4. All of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: [
            "1. Commas",
            "2. Curly brackets",
            "3. Quotations",
            "4. Parentheses"
        ],
        answer: "3. Quotations"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "1. JavaScript",
            "2. Terminal/Bash",
            "3. For loops",
            "4. console.log"
        ],
        answer: "4. console.log"
    }
]

// Show highscores list
function showScore(){

};



submitButton.addEventListener('click', showScore());
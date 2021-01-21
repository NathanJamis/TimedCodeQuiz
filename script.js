var quizContainer = document.querySelector('.quiz');
var scoreContainer = document.querySelector('.score');
var startButton = document.querySelector('.startQuiz');
var timerEl = document.querySelector('.timer');
var highScoreEL = document.querySelector('.highScores');
var containerEl = document.querySelector('.container');
var buttonsEl = document.querySelector('.choiceButtons');
var secondsLeft = 60;
var score = 0;
var index = 0;
var highScores = [];

// Timer function
function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            alert("You ran out of time!");
        }
    }, 1000);
}

// Begin quiz and start timer
function startQuiz() {
    startButton.addEventListener("click", function(event) {
        if (secondsLeft < 60) {
            event.preventDefault();
        } else {
            timerEl.textContent = "Time left: " + secondsLeft;
            timer();
            showQuestions();
        }
    });
};

// Display questions
function showQuestions() {
    quizContainer.innerHTML = "<h2>" + questions[index].question + "</h2>";
    quizContainer.style.textAlign = "left";
    for (var i = 0; i < questions[index].choices.length; i++) {
        document.querySelector(".choices" + i).innerHTML = 
        "<button type='button' class='btn btn-primary'>" + questions[index].choices[i] + "</button>";
    }
};

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


// Submit score
function submitScore() {

};

// Show highscores list
function showScore() {

};

startQuiz()
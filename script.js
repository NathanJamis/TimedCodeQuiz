var quizContainer = document.querySelector('.quiz');
var scoreContainer = document.querySelector('.score');
var startButton = document.querySelector('.startQuiz');
var timerEl = document.querySelector('.timer');
var highScoreEL = document.querySelector('.highScores');
var containerEl = document.querySelector('.container');
var buttonsEl = document.querySelector('.choiceButtons');
var submit = document.querySelector(".submit");
var clear = document.querySelector(".clear");
var form = document.querySelector(".submitForm");
var secondsLeft = 60;
var score = 0;
var index = 0;
var highScores = [];
var save = [];

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

buttonsEl.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.target.textContent === questions[index].answer) {
        // buttonsEl.appendChild("<br><hr>" + "Correct!");
        secondsLeft = secondsLeft + 10;
    } else {
        // buttonsEl.appendChild("<br><hr>" + "Wrong!");
        secondsLeft = secondsLeft - 10;
    }
    if (index < questions.length - 1) {
        index++;
        showQuestions();
    } else {
        score = secondsLeft;
        submitScore();
    }
});

// Submit score
function submitScore() {
    quizContainer.innerHTML = "<h2>You're done!</h2><br>";
    buttonsEl.innerHTML = "Score: " + score + "." + "<br><br>";
        var form = document.createElement("form");
        document.body.appendChild(form);
        var initialsButton = document.querySelector(".submit");
        initialsButton.addEventListener("click", function(event) {
            event.preventDefault();
            if (localStorage.getItem("user") !== null) {
                scores = JSON.parse(localStorage.getItem("user"));
            }
            if (localStorage.getItem("score") !== null) {
                scores = JSON.parse(localStorage.getItem("score"));
            }
            if (scores.length > 0) {
                for (var b = 0; b < scores.length; b++) {
                    save.push(scores[b]);
                }
            }

            var userInitials = document.querySelector(".initInput").nodeValue;
            var userScore = { userInitials, score};

            save.push(userScore);

            localStorage.setItem("user,score", JSON.stringify(save));
            showScore();
        });

};

// Show highscores list
function showScore() {
    document.querySelectorAll(".container")[2].style.display="none";
    containerEl.innerHTML = "<h2>High Scores:</h2><br>";
    for (var a = 0; a < save.length; a++) {
        var scoreList = document.createElement("div");
        scoreList.textContent = save[a].userInitials + " " + "  Score: " + save[a].score;
        containerEl.appendChild(scoreList);
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

startQuiz()
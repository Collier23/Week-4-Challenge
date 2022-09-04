
var startButton = document.getElementById("button");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answer5 = document.getElementById("answer5");
var answer6 = document.getElementById("answer6");
var answer7 = document.getElementById("answer7");
var answer8 = document.getElementById("answer8");
var answer9 = document.getElementById("answer9");
var answer10 = document.getElementById("answer10");
var score = document.getElementById("score");
var highScore = document.getElementById("high-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var viewHighScores = document.getElementById("view-high-scores");
var clearHighScores = document.getElementById("clear-high-scores");
var highScores = document.getElementById("high-scores");
var timeLeft = 75;
var score = 0;
var questionNumber = 0;
var questionArray = ["commonly used data types DO NOT include:", "the condition in an if/else statement is enclosed within ____.", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:", "What is the correct syntax for referring to an external script called 'xxx.js'?", "How do you write 'Hello World' in an alert box?", "How do you create a function in JavaScript?", "How do you call a function named 'myFunction'?", "How to write an IF statement in JavaScript?"];
var answerArray = [["strings", "booleans", "alerts", "numbers"], ["quotes", "curly brackets", "parentheses", "square brackets"], ["numbers and strings", "other arrays", "booleans", "all of the above"], ["commas", "curly brackets", "quotes", "parentheses"], ["JavaScript", "terminal/bash", "for loops", "console.log"], ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script ref='xxx.js'>", "<script name='xxx.js'>"], ["msg('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"], ["function = myFunction()", "function:myFunction()", "function myFunction()", "function myFunction()"], ["call myFunction()", "call function myFunction()", "myFunction()", "myFunction()"], ["if i = 5", "if i = 5 then", "if (i == 5)", "if i == 5 then"]];
var correctAnswerArray = ["alerts", "parentheses", "all of the above", "quotes", "console.log", "<script src='xxx.js'>", "alert('Hello World')", "function myFunction()", "myFunction()", "if (i == 5)"];





function startQuiz() {
    var startButton = document.getElementById("button");
    startButton.addEventListener("click", startQuiz);
}

function timer() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            sendMessage();
        }
    }, 1000);
}

function question() {
    question.textContent = questionArray[questionNumber];
    answer1.textContent = answerArray[questionNumber][0];
    answer2.textContent = answerArray[questionNumber][1];
    answer3.textContent = answerArray[questionNumber][2];
    answer4.textContent = answerArray[questionNumber][3];
}

function answer() {
    answer1.addEventListener("click", function() {
        if (answer1.textContent === correctAnswerArray[questionNumber]) {
            score++;
            questionNumber++;
            question();
        } else {
            timeLeft -= 5;
            questionNumber++;
            question();
        }
    });
    answer2.addEventListener("click", function() {
        if (answer2.textContent === correctAnswerArray[questionNumber]) {
            score++;
            questionNumber++;
            question();
        } else {
            timeLeft -= 5;
            questionNumber++;
            question();
        }
    });
    answer3.addEventListener("click", function() {
        if (answer3.textContent === correctAnswerArray[questionNumber]) {
            score++;
            questionNumber++;
            question();
        } else {
            timeLeft -= 5;
            questionNumber++;
            question();
        }
    });
    answer4.addEventListener("click", function() {
        if (answer4.textContent === correctAnswerArray[questionNumber]) {
            score++;
            questionNumber++;
            question();
        } else {
            timeLeft -= 5;
            questionNumber++;
            question();
        }
    });
}

function score() {
    score.textContent = score;
}

function highScore() {
    highScore.textContent = highScore;
}

function initials() {
    initials.textContent = initials;
}





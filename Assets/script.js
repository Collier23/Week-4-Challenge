let timeLeft = 75;
let score = 0;
let currentQuestionIndex = 0;

let questionTitle;
let choice;


const answerReview = document.createElement('p');
const timerElement = document.createElement('timer');

const startBtn = document.querySelector(".start");

const countdown = () => {
      
  const timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerElement.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {    
      timerElement.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {      
      timerElement.textContent = 'Out of time!';     
      clearInterval(timeInterval);
      clearQuestion();
      answerReview.remove();

      displayScore();
      saveHighScore(); 
    }
  }, 1000);

    timerElement.className = 'timer';
    timerElement.textContent = ` ${timeLeft + 0} seconds remaining`;
    document.body.appendChild(timerElement);    
};

const remove10 = () => {
  timeLeft = timeLeft - 10;
};

const displayScore = () => {
  let result = document.createElement('p');
  result.textContent = `Your score was ${score}!`;
  result.className = 'result';
  document.body.appendChild(result);
};

const clearQuestion = () => {
  document.body.removeChild(questionTitle);

  let multipleChoice = document.querySelectorAll(".multiple-choice");
  for (let i = 0; i < multipleChoice.length; i++) {
    multipleChoice[i].remove();
  };
};

const nextQuestion = () => {
  clearQuestion();

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    timerElement.remove();
    
    const allDone = document.createElement('h2');
    allDone.textContent = `Thanks for playing!`;
    allDone.className = 'end';
    document.body.appendChild(allDone);
    displayScore();
    saveHighScore();

  } else {
    displayQuestions()
  }
};

const displayQuestions = () => {
  let currentQuestion = questions[currentQuestionIndex].title;
  let questionChoice = questions[currentQuestionIndex].choices;
    
  questionTitle = document.createElement('h2');
  questionTitle.textContent = `${currentQuestionIndex + 1}: ${currentQuestion}`;
  
  document.body.appendChild(questionTitle);

  for (let i = 0; i < 4; i++) {
    choice = document.createElement('p');
    choice.textContent = questionChoice[i];
    choice.className = 'multiple-choice';
    document.body.appendChild(choice);

    choice.addEventListener('click', checkAnswer)
  }
};

const checkAnswer = (event) => {
  let questionAnswer = questions[currentQuestionIndex].answer;
    
  if (event.target.innerText === questionAnswer) {
    answerReview.textContent = `Thats Right!`;
    answerReview.className = 'review';
    document.body.appendChild(answerReview);
    score += 10;
  } else {
    answerReview.textContent = `Almost!`;
    answerReview.className = 'review';
    document.body.appendChild(answerReview);
    remove10();
  };

  nextQuestion();
};

const initialsForm = document.createElement('input');

const saveHighScore = () => {
  const initialsPrompt = document.createElement('initials');
  initialsPrompt.textContent = `Enter your initials:`;
  document.body.appendChild(initialsPrompt);

  document.body.appendChild(initialsForm);
  const submit = document.createElement('button');
  submit.textContent = `Enter Score`;
  document.body.appendChild(submit);
  submit.addEventListener('click', submitHighScore)

}

const submitHighScore = () => {
  let gamePlayed = {
    Initials: initialsForm.value,
    Score: score,
  };
  if (initialsForm.value === '') {
    window.alert(`Need input for intials`)
  }
  localStorage.setItem("gamePlayed", JSON.stringify(gamePlayed));
  window.location.href = "highscores.html";

}

startBtn.addEventListener(
  "click",
    () => {
      startBtn.remove(); 
      countdown();
      displayQuestions(); 
    }
);
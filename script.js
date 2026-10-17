const startButton = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const progressElement = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");
const timerElement = document.getElementById("timer");

// Questions database
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["JavaScript", "CSS", "Python"],
    answer: "CSS",
  },
  {
    question: "Which language makes web pages interactive?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;

// Start Quiz
startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  document.querySelector(".quiz-container > p").style.display = "none";
  quizScreen.style.display = "block";

  showQuestion();
});

// Update Progress Bar
function updateProgress() {
  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  progressFill.style.width = `${progressPercentage}%`;
}

// Display Question
function showQuestion() {
  clearInterval(timerInterval);

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;

  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  updateProgress();

  optionsElement.innerHTML = "";
  nextButton.style.display = "none";
  restartButton.style.display = "none";

  currentQuestion.options.forEach(function (option) {
    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", function () {
      if (timeLeft <= 0) {
        return;
      }

      clearInterval(timerInterval);

      const allButtons = optionsElement.querySelectorAll("button");

      allButtons.forEach(function (btn) {
        btn.disabled = true;
      });

      if (option === currentQuestion.answer) {
        button.style.backgroundColor = "green";
        button.style.color = "white";

        score++;
      } else {
        button.style.backgroundColor = "red";
        button.style.color = "white";

        allButtons.forEach(function (btn) {
          if (btn.textContent === currentQuestion.answer) {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
          }
        });
      }

      nextButton.style.display = "inline-block";
    });

    optionsElement.appendChild(button);
  });

  startTimer();
}

// Start Timer
function startTimer() {
  timeLeft = 15;
  timerElement.textContent = `Time: ${timeLeft}s`;

  timerInterval = setInterval(function () {
    timeLeft--;

    timerElement.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      const allButtons = optionsElement.querySelectorAll("button");

      allButtons.forEach(function (btn) {
        btn.disabled = true;

        if (btn.textContent === questions[currentQuestionIndex].answer) {
          btn.style.backgroundColor = "green";
          btn.style.color = "white";
        }
      });

      nextButton.style.display = "inline-block";
    }
  }, 1000);
}

// Next Question
nextButton.addEventListener("click", function () {
  clearInterval(timerInterval);

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Show Final Result
function showResult() {
  clearInterval(timerInterval);

  questionElement.textContent = "Quiz Completed!";
  progressElement.textContent = "Quiz Finished!";
  progressFill.style.width = "100%";
  timerElement.textContent = "";

  const percentage = Math.round((score / questions.length) * 100);

  let message;

  if (percentage >= 80) {
    message = "Excellent! 🏆";
  } else if (percentage >= 60) {
    message = "Good Job! 🎉";
  } else if (percentage >= 40) {
    message = "Not Bad! 👍";
  } else {
    message = "Keep Practicing! 💪";
  }

  optionsElement.innerHTML = `
    <h3>Your Score: ${score} / ${questions.length}</h3>
    <h3>Percentage: ${percentage}%</h3>
    <h3>${message}</h3>
  `;

  nextButton.style.display = "none";
  restartButton.style.display = "inline-block";
}

// Restart Quiz
restartButton.addEventListener("click", function () {
  clearInterval(timerInterval);

  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;

  showQuestion();
});

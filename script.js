const startButton = document.getElementById("start-btn");
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

const progressElement = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");

const timerElement = document.getElementById("timer");
const quizCategoryElement = document.getElementById("quiz-category");
const introText = document.getElementById("intro-text");

// Questions database
const questions = [
  // HTML - Easy
  {
    category: "HTML",
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    category: "HTML",
    difficulty: "Easy",
    question: "Which tag creates a paragraph?",
    options: ["<h1>", "<p>", "<div>"],
    answer: "<p>",
  },

  // HTML - Medium
  {
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML tag creates a hyperlink?",
    options: ["<link>", "<a>", "<href>"],
    answer: "<a>",
  },
  {
    category: "HTML",
    difficulty: "Medium",
    question: "Which attribute provides alternative text for an image?",
    options: ["title", "src", "alt"],
    answer: "alt",
  },

  // HTML - Hard
  {
    category: "HTML",
    difficulty: "Hard",
    question: "Which attribute connects a label to a form input?",
    options: ["name", "for", "class"],
    answer: "for",
  },
  {
    category: "HTML",
    difficulty: "Hard",
    question: "Which attribute makes an input field mandatory?",
    options: ["required", "validate", "mandatory"],
    answer: "required",
  },

  // CSS - Easy
  {
    category: "CSS",
    difficulty: "Easy",
    question: "Which CSS property changes text color?",
    options: ["background", "font-size", "color"],
    answer: "color",
  },
  {
    category: "CSS",
    difficulty: "Easy",
    question: "Which symbol is used to select a class?",
    options: ["#", ".", "*"],
    answer: ".",
  },

  // CSS - Medium
  {
    category: "CSS",
    difficulty: "Medium",
    question: "Which CSS layout system uses rows and columns?",
    options: ["Flexbox", "Grid", "Float"],
    answer: "Grid",
  },
  {
    category: "CSS",
    difficulty: "Medium",
    question: "Which property controls space inside an element?",
    options: ["margin", "padding", "border"],
    answer: "padding",
  },

  // CSS - Hard
  {
    category: "CSS",
    difficulty: "Hard",
    question: "Which selector has the highest specificity?",
    options: ["Element selector", "Class selector", "ID selector"],
    answer: "ID selector",
  },
  {
    category: "CSS",
    difficulty: "Hard",
    question: "Which CSS unit is relative to the root font size?",
    options: ["px", "em", "rem"],
    answer: "rem",
  },

  // JavaScript - Easy
  {
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which keyword declares a block-scoped variable?",
    options: ["let", "print", "define"],
    answer: "let",
  },
  {
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which symbol is commonly used for strict equality?",
    options: ["=", "===", "!="],
    answer: "===",
  },

  // JavaScript - Medium
  {
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which method adds an item to the end of an array?",
    options: ["pop()", "push()", "shift()"],
    answer: "push()",
  },
  {
    category: "JavaScript",
    difficulty: "Medium",
    question:
      "Which array method creates a new array by transforming elements?",
    options: ["map()", "find()", "forEach()"],
    answer: "map()",
  },

  // JavaScript - Hard
  {
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which method creates a new array containing matching elements?",
    options: ["map()", "filter()", "forEach()"],
    answer: "filter()",
  },
  {
    category: "JavaScript",
    difficulty: "Hard",
    question: "What does a Promise represent in JavaScript?",
    options: [
      "A CSS animation",
      "An eventual result of an asynchronous operation",
      "A type of loop",
    ],
    answer: "An eventual result of an asynchronous operation",
  },
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;

// Start Quiz
startButton.addEventListener("click", function () {
  const selectedCategory = categorySelect.value;
  const selectedDifficulty = difficultySelect.value;

  // Filter questions by category and difficulty
  currentQuestions = questions.filter(function (question) {
    const categoryMatches =
      selectedCategory === "All" || question.category === selectedCategory;

    const difficultyMatches =
      selectedDifficulty === "All" ||
      question.difficulty === selectedDifficulty;

    return categoryMatches && difficultyMatches;
  });

  if (currentQuestions.length === 0) {
    alert("No questions available for this selection.");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;

  setupScreen.style.display = "none";
  introText.style.display = "none";
  quizScreen.style.display = "block";

  showQuestion();
});

// Update Progress Bar
function updateProgress() {
  const percentage =
    ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  progressFill.style.width = `${percentage}%`;
}

// Display Question
function showQuestion() {
  clearInterval(timerInterval);

  const currentQuestion = currentQuestions[currentQuestionIndex];

  answered = false;

  questionElement.textContent = currentQuestion.question;

  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

  quizCategoryElement.textContent = `${currentQuestion.category} | ${currentQuestion.difficulty}`;

  updateProgress();

  optionsElement.innerHTML = "";
  nextButton.style.display = "none";
  restartButton.style.display = "none";

  currentQuestion.options.forEach(function (option) {
    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", function () {
      if (answered || timeLeft <= 0) {
        return;
      }

      answered = true;
      clearInterval(timerInterval);

      const allButtons = optionsElement.querySelectorAll("button");

      allButtons.forEach(function (btn) {
        btn.disabled = true;
      });

      if (option === currentQuestion.answer) {
        button.style.backgroundColor = "green";
        score++;
      } else {
        button.style.backgroundColor = "red";

        allButtons.forEach(function (btn) {
          if (btn.textContent === currentQuestion.answer) {
            btn.style.backgroundColor = "green";
          }
        });
      }

      nextButton.style.display = "block";
    });

    optionsElement.appendChild(button);
  });

  startTimer();
}

// Start Timer
function startTimer() {
  clearInterval(timerInterval);

  timeLeft = 15;
  timerElement.textContent = `Time: ${timeLeft}s`;

  timerInterval = setInterval(function () {
    timeLeft--;

    timerElement.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      answered = true;

      const allButtons = optionsElement.querySelectorAll("button");

      allButtons.forEach(function (button) {
        button.disabled = true;

        if (
          button.textContent === currentQuestions[currentQuestionIndex].answer
        ) {
          button.style.backgroundColor = "green";
        }
      });

      nextButton.style.display = "block";
    }
  }, 1000);
}

// Next Question
nextButton.addEventListener("click", function () {
  clearInterval(timerInterval);

  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
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
  quizCategoryElement.textContent = "";
  timerElement.textContent = "";

  progressFill.style.width = "100%";

  const percentage = Math.round((score / currentQuestions.length) * 100);

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
    <h3>Your Score: ${score} / ${currentQuestions.length}</h3>
    <h3>Percentage: ${percentage}%</h3>
    <h3>${message}</h3>
  `;

  nextButton.style.display = "none";
  restartButton.style.display = "block";
}

// Return to Quiz Setup
restartButton.addEventListener("click", function () {
  clearInterval(timerInterval);

  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  answered = false;

  quizScreen.style.display = "none";
  setupScreen.style.display = "block";
  introText.style.display = "block";

  optionsElement.innerHTML = "";
  progressElement.textContent = "";
  progressFill.style.width = "0%";
  timerElement.textContent = "Time: 15s";
  quizCategoryElement.textContent = "";

  questionElement.textContent = "";
});

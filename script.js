const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const historyScreen = document.getElementById("history-screen");

const introText = document.getElementById("intro-text");

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");

const startButton = document.getElementById("start-btn");
const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

const backToSetupButton = document.getElementById("back-to-setup-btn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const timerElement = document.getElementById("timer");
const progressElement = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");
const quizCategoryElement = document.getElementById("quiz-category");

const finalScoreElement = document.getElementById("final-score");
const percentageElement = document.getElementById("percentage");
const performanceElement = document.getElementById("performance");
const bestScoreElement = document.getElementById("best-score");

const historyList = document.getElementById("history-list");

// Quiz Questions
const questions = [
  // HTML - Easy
  {
    category: "HTML",
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    category: "HTML",
    difficulty: "Easy",
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: "<h1>",
  },

  // HTML - Medium
  {
    category: "HTML",
    difficulty: "Medium",
    question: "Which attribute provides alternative text for an image?",
    options: ["src", "alt", "title", "href"],
    answer: "alt",
  },
  {
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is used to create a dropdown list?",
    options: ["<input>", "<list>", "<select>", "<dropdown>"],
    answer: "<select>",
  },

  // HTML - Hard
  {
    category: "HTML",
    difficulty: "Hard",
    question: "Which attribute connects a label to a form input?",
    options: ["name", "for", "target", "rel"],
    answer: "for",
  },
  {
    category: "HTML",
    difficulty: "Hard",
    question: "Which attribute makes an input field mandatory?",
    options: ["validate", "required", "mandatory", "checked"],
    answer: "required",
  },

  // CSS - Easy
  {
    category: "CSS",
    difficulty: "Easy",
    question: "Which CSS property changes text color?",
    options: ["font-style", "background", "color", "text-size"],
    answer: "color",
  },
  {
    category: "CSS",
    difficulty: "Easy",
    question: "Which symbol is used to select a class in CSS?",
    options: ["#", ".", "*", "&"],
    answer: ".",
  },

  // CSS - Medium
  {
    category: "CSS",
    difficulty: "Medium",
    question: "Which property creates space inside an element's border?",
    options: ["margin", "padding", "spacing", "gap"],
    answer: "padding",
  },
  {
    category: "CSS",
    difficulty: "Medium",
    question:
      "Which CSS layout system is designed for one-dimensional layouts?",
    options: ["Flexbox", "Float", "Position", "Table"],
    answer: "Flexbox",
  },

  // CSS - Hard
  {
    category: "CSS",
    difficulty: "Hard",
    question: "Which selector has the highest specificity?",
    options: [
      "Element selector",
      "Class selector",
      "ID selector",
      "Universal selector",
    ],
    answer: "ID selector",
  },
  {
    category: "CSS",
    difficulty: "Hard",
    question:
      "Which property controls how an element behaves when content overflows?",
    options: ["display", "overflow", "position", "visibility"],
    answer: "overflow",
  },

  // JavaScript - Easy
  {
    category: "JavaScript",
    difficulty: "Easy",
    question:
      "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "static", "define"],
    answer: "let",
  },
  {
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which method displays a message in the browser console?",
    options: ["console.log()", "print()", "display()", "message()"],
    answer: "console.log()",
  },

  // JavaScript - Medium
  {
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which array method adds an item to the end of an array?",
    options: ["pop()", "shift()", "push()", "slice()"],
    answer: "push()",
  },
  {
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which operator checks strict equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },

  // JavaScript - Hard
  {
    category: "JavaScript",
    difficulty: "Hard",
    question: "What does Array.prototype.map() return?",
    options: [
      "The original array only",
      "A new array",
      "A number",
      "Always undefined",
    ],
    answer: "A new array",
  },
  {
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which method converts a JSON string into a JavaScript value?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.decode()",
    ],
    answer: "JSON.parse()",
  },
];

// Quiz State
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;

let selectedCategory = "";
let selectedDifficulty = "";

// Load saved data
let bestScore = Number(localStorage.getItem("quizBestScore")) || 0;

let quizHistory = [];

try {
  const savedHistory = JSON.parse(localStorage.getItem("quizHistory"));

  if (Array.isArray(savedHistory)) {
    quizHistory = savedHistory;
  }
} catch (error) {
  quizHistory = [];
}

// Shuffle array
function shuffleQuestions(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

// Start Quiz
startButton.addEventListener("click", function () {
  selectedCategory = categorySelect.value;
  selectedDifficulty = difficultySelect.value;

  const filteredQuestions = questions.filter(function (question) {
    return (
      question.category === selectedCategory &&
      question.difficulty === selectedDifficulty
    );
  });

  if (filteredQuestions.length === 0) {
    alert("No questions available for this selection.");
    return;
  }

  quizQuestions = shuffleQuestions(filteredQuestions);

  currentQuestionIndex = 0;
  score = 0;

  setupScreen.style.display = "none";
  resultScreen.style.display = "none";
  historyScreen.style.display = "none";
  quizScreen.style.display = "block";

  introText.style.display = "none";

  quizCategoryElement.textContent = `${selectedCategory} - ${selectedDifficulty}`;

  loadQuestion();
});

// Load Question
function loadQuestion() {
  clearInterval(timerInterval);

  answered = false;
  timeLeft = 15;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;

  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

  const progressPercentage =
    (currentQuestionIndex / quizQuestions.length) * 100;

  progressFill.style.width = `${progressPercentage}%`;

  timerElement.textContent = `Time: ${timeLeft}s`;

  optionsElement.innerHTML = "";
  nextButton.style.display = "none";

  const shuffledOptions = shuffleQuestions(currentQuestion.options);

  shuffledOptions.forEach(function (option) {
    const button = document.createElement("button");

    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", function () {
      selectAnswer(button, option);
    });

    optionsElement.appendChild(button);
  });

  startTimer();
}

// Start Timer
function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    timeLeft--;

    timerElement.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      timeLeft = 0;
      timerElement.textContent = "Time's up!";

      if (!answered) {
        answered = true;

        disableOptions();
        showCorrectAnswer();

        nextButton.style.display = "block";
      }
    }
  }, 1000);
}

// Select Answer
function selectAnswer(selectedButton, selectedOption) {
  if (answered) {
    return;
  }

  answered = true;

  clearInterval(timerInterval);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
    showCorrectAnswer();
  }

  disableOptions();

  nextButton.style.display = "block";
}

// Disable options
function disableOptions() {
  const optionButtons = optionsElement.querySelectorAll(".option-btn");

  optionButtons.forEach(function (button) {
    button.disabled = true;
  });
}

// Show correct answer
function showCorrectAnswer() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const optionButtons = optionsElement.querySelectorAll(".option-btn");

  optionButtons.forEach(function (button) {
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });
}

// Next Question
nextButton.addEventListener("click", function () {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show Result and Save History
function showResult() {
  clearInterval(timerInterval);

  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  const totalQuestions = quizQuestions.length;

  const percentage = Math.round((score / totalQuestions) * 100);

  finalScoreElement.textContent = `Your Score: ${score} / ${totalQuestions}`;

  percentageElement.textContent = `Percentage: ${percentage}%`;

  // Update best score
  if (score > bestScore) {
    bestScore = score;

    localStorage.setItem("quizBestScore", String(bestScore));
  }

  bestScoreElement.textContent = `Best Score: ${bestScore}`;

  // Performance message
  if (percentage === 100) {
    performanceElement.textContent = "Excellent! Perfect score!";
  } else if (percentage >= 70) {
    performanceElement.textContent = "Great job! You did really well.";
  } else if (percentage >= 40) {
    performanceElement.textContent = "Good effort! Keep practicing.";
  } else {
    performanceElement.textContent = "Keep learning! You will improve.";
  }

  // Create a history record
  const historyRecord = {
    category: selectedCategory,
    difficulty: selectedDifficulty,
    score: score,
    totalQuestions: totalQuestions,
    percentage: percentage,
    date: new Date().toLocaleString(),
  };

  // Add newest result at the beginning
  quizHistory.unshift(historyRecord);

  // Save history in localStorage
  try {
    localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
  } catch (error) {
    console.error("Unable to save quiz history:", error);
  }
}

// Display Quiz History
function displayHistory() {
  historyList.innerHTML = "";

  if (quizHistory.length === 0) {
    const message = document.createElement("p");

    message.textContent = "No quiz history available yet.";

    historyList.appendChild(message);
    return;
  }

  quizHistory.forEach(function (record) {
    const historyCard = document.createElement("div");

    historyCard.classList.add("history-card");

    const title = document.createElement("h3");
    title.textContent = `${record.category} - ${record.difficulty}`;

    const scoreText = document.createElement("p");
    scoreText.textContent = `Score: ${record.score}/${record.totalQuestions}`;

    const percentageText = document.createElement("p");
    percentageText.textContent = `Percentage: ${record.percentage}%`;

    const dateText = document.createElement("p");
    dateText.textContent = `Date: ${record.date}`;

    historyCard.appendChild(title);
    historyCard.appendChild(scoreText);
    historyCard.appendChild(percentageText);
    historyCard.appendChild(dateText);

    historyList.appendChild(historyCard);
  });
}

// Create and show View History button on result screen
const viewHistoryButton = document.createElement("button");

viewHistoryButton.id = "view-history-btn";
viewHistoryButton.textContent = "View Quiz History";

resultScreen.appendChild(viewHistoryButton);

viewHistoryButton.addEventListener("click", function () {
  resultScreen.style.display = "none";
  historyScreen.style.display = "block";

  displayHistory();
});

// Back to Setup from Quiz
backButton.addEventListener("click", function () {
  clearInterval(timerInterval);

  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  answered = false;
  quizQuestions = [];

  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
  historyScreen.style.display = "none";

  setupScreen.style.display = "block";
  introText.style.display = "block";

  optionsElement.innerHTML = "";
  questionElement.textContent = "";
  progressElement.textContent = "";
  quizCategoryElement.textContent = "";

  progressFill.style.width = "0%";
  timerElement.textContent = "Time: 15s";

  nextButton.style.display = "none";
});

// Back to Setup from History
backToSetupButton.addEventListener("click", function () {
  historyScreen.style.display = "none";
  resultScreen.style.display = "none";
  quizScreen.style.display = "none";

  setupScreen.style.display = "block";
  introText.style.display = "block";
});

// Choose Again
restartButton.addEventListener("click", function () {
  clearInterval(timerInterval);

  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
  historyScreen.style.display = "none";

  setupScreen.style.display = "block";
  introText.style.display = "block";

  optionsElement.innerHTML = "";
  questionElement.textContent = "";
  progressElement.textContent = "";
  quizCategoryElement.textContent = "";

  progressFill.style.width = "0%";
  timerElement.textContent = "Time: 15s";

  nextButton.style.display = "none";
});

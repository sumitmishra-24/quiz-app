// =========================

// DOM ELEMENTS

// =========================

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

const viewHistoryButton = document.getElementById("view-history-btn");

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

const themeButton = document.getElementById("theme-btn");

const soundButton = document.getElementById("sound-btn");

// =========================

// QUESTION BANK — 50 TOTAL

// HTML: 17 | CSS: 17 | JavaScript: 16

// Each question: [question, options, correctOptionIndex]

// =========================

const questionBank = {
  HTML: {
    Easy: [
      [
        "What does HTML stand for?",

        [
          "Hyper Text Markup Language",

          "High Text Machine Language",

          "Hyperlinks Text Mark Language",

          "Home Tool Markup Language",
        ],

        0,
      ],

      [
        "Which tag creates the largest heading?",

        ["<h6>", "<head>", "<h1>", "<heading>"],

        2,
      ],

      [
        "Which tag creates a paragraph?",

        ["<p>", "<para>", "<text>", "<paragraph>"],

        0,
      ],

      [
        "Which tag inserts a line break?",

        ["<break>", "<br>", "<lb>", "<line>"],

        1,
      ],

      [
        "Which tag creates a hyperlink?",

        ["<link>", "<a>", "<href>", "<url>"],

        1,
      ],

      [
        "Which tag displays an image?",

        ["<picture>", "<image>", "<img>", "<src>"],

        2,
      ],

      [
        "Which tag creates an unordered list?",

        ["<ol>", "<ul>", "<li>", "<list>"],

        1,
      ],
    ],

    Medium: [
      [
        "Which attribute provides alternative text for an image?",

        ["src", "alt", "title", "href"],

        1,
      ],

      [
        "Which element creates a dropdown list?",

        ["<input>", "<list>", "<select>", "<dropdown>"],

        2,
      ],

      [
        "Which element defines navigation links?",

        ["<navigate>", "<nav>", "<navigation>", "<links>"],

        1,
      ],

      [
        "Which attribute connects a label to an input?",

        ["name", "for", "target", "rel"],

        1,
      ],

      [
        "Which element is used to play video?",

        ["<media>", "<movie>", "<video>", "<play>"],

        2,
      ],

      [
        "Which element is used for audio playback?",

        ["<sound>", "<audio>", "<music>", "<mp3>"],

        1,
      ],
    ],

    Hard: [
      [
        "Which element represents independent, self-contained content?",

        ["<section>", "<article>", "<aside>", "<div>"],

        1,
      ],

      [
        "Which attribute helps lazy-load an image?",

        ['loading="lazy"', 'lazy="true"', 'load="slow"', 'defer="image"'],

        0,
      ],

      [
        "Which element provides a caption for a figure?",

        ["<caption>", "<figcaption>", "<figuretitle>", "<label>"],

        1,
      ],

      [
        "Which attribute specifies a regular expression for input validation?",

        ["pattern", "validate", "regex", "match"],

        0,
      ],
    ],
  },

  CSS: {
    Easy: [
      [
        "Which CSS property changes text color?",

        ["font-style", "background", "color", "text-size"],

        2,
      ],

      ["Which symbol selects a class?", ["#", ".", "*", "&"], 1],

      ["Which symbol selects an ID?", [".", "#", "*", "$"], 1],

      [
        "Which property changes the background color?",

        ["color", "background-color", "bgcolor", "background-style"],

        1,
      ],

      [
        "Which property changes text size?",

        ["font-size", "text-style", "font-weight", "text-font"],

        0,
      ],

      [
        "Which property makes text bold?",

        ["font-style", "text-bold", "font-weight", "bold"],

        2,
      ],

      [
        "Which property centers text horizontally?",

        ["align", "text-align", "center-text", "text-position"],

        1,
      ],
    ],

    Medium: [
      [
        "Which property creates space inside an element's border?",

        ["margin", "padding", "spacing", "gap"],

        1,
      ],

      [
        "Which layout system is designed for one-dimensional layouts?",

        ["Flexbox", "Float", "Position", "Table"],

        0,
      ],

      [
        "Which property changes the space between lines of text?",

        ["letter-spacing", "line-height", "word-spacing", "text-gap"],

        1,
      ],

      [
        "Which property controls an element's stacking order?",

        ["position", "layer", "z-index", "stack-order"],

        2,
      ],

      [
        "Which value hides an element but preserves its layout space?",

        [
          "display: none",

          "visibility: hidden",

          "opacity: 0",

          "position: hidden",
        ],

        1,
      ],

      [
        "Which property controls content overflow?",

        ["display", "overflow", "position", "visibility"],

        1,
      ],
    ],

    Hard: [
      [
        "Which selector has the highest specificity?",

        [
          "Element selector",

          "Class selector",

          "ID selector",

          "Universal selector",
        ],

        2,
      ],

      [
        "Which CSS feature defines reusable custom properties?",

        [
          "Variables beginning with --",

          "Mixins",

          "Constants without prefixes",

          "Functions only",
        ],

        0,
      ],

      [
        "Which declaration creates a two-column grid?",

        [
          "display: flex",

          "grid-template-columns: 1fr 1fr",

          "columns: 2",

          "grid-columns: 2",
        ],

        1,
      ],

      [
        "Which rule applies styles based on viewport conditions?",

        ["@font-face", "@keyframes", "@media", "@import"],

        2,
      ],
    ],
  },

  JavaScript: {
    Easy: [
      [
        "Which keyword declares a variable that can be reassigned?",

        ["const", "let", "static", "fixed"],

        1,
      ],

      [
        "Which method displays a message in the browser console?",

        ["console.log()", "print()", "display()", "message()"],

        0,
      ],

      [
        "Which data type represents true or false?",

        ["String", "Number", "Boolean", "Object"],

        2,
      ],

      [
        "Which symbol is used for a single-line comment?",

        ["<!-- -->", "//", "**", "##"],

        1,
      ],

      ["Which operator adds two numbers?", ["+", "&", "%", "==="], 0],

      [
        "Which method adds an item to the end of an array?",

        ["pop()", "shift()", "push()", "slice()"],

        2,
      ],
    ],

    Medium: [
      ["Which operator checks strict equality?", ["=", "==", "===", "!="], 2],

      [
        "Which method converts a JSON string into a JavaScript value?",

        ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.decode()"],

        1,
      ],

      [
        "Which array method creates a new array by transforming each item?",

        ["forEach()", "map()", "find()", "push()"],

        1,
      ],

      [
        "Which keyword is used to define a function?",

        ["func", "method", "function", "define"],

        2,
      ],

      [
        "Which statement handles errors?",

        ["try...catch", "if...else", "for...of", "switch"],

        0,
      ],
    ],

    Hard: [
      [
        "What does Array.prototype.map() return?",

        [
          "The original array only",

          "A new array",

          "A number",

          "Always undefined",
        ],

        1,
      ],

      [
        "Which operator safely accesses a potentially missing nested property?",

        ["?.", "??.", "!!", "::"],

        0,
      ],

      [
        "What does Object.freeze() do to an object?",

        [
          "Deep-freezes every nested object automatically",

          "Prevents changing its own properties",

          "Deletes its properties",

          "Converts it to JSON",
        ],

        1,
      ],

      [
        "Which function schedules a callback after a minimum delay?",

        [
          "setInterval()",

          "requestAnimationFrame()",

          "setTimeout()",

          "queueForever()",
        ],

        2,
      ],

      [
        "Which value represents an intentional absence of a value?",

        ["undefined", "NaN", "null", "false"],

        2,
      ],
    ],
  },
};

// Convert the question bank into one array.

// The answer is stored as the correct option's text.

const questions = [];

Object.keys(questionBank).forEach(function (category) {
  Object.keys(questionBank[category]).forEach(function (difficulty) {
    questionBank[category][difficulty].forEach(function (item) {
      questions.push({
        category: category,

        difficulty: difficulty,

        question: item[0],

        options: item[1],

        answer: item[1][item[2]],
      });
    });
  });
});

console.log("Total quiz questions:", questions.length); // 50

// =========================

// QUIZ STATE

// =========================

let quizQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let timeLeft = 15;

let timerInterval = null;

let answered = false;

let selectedCategory = "Default";

let selectedDifficulty = "Default";

// =========================

// LOCAL STORAGE

// =========================

function getSavedValue(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    return value === null ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

function saveValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Could not save data:", error);
  }
}

let bestScore = Number(getSavedValue("quizBestScore", "0")) || 0;

let quizHistory = [];

try {
  const savedHistory = JSON.parse(getSavedValue("quizHistory", "[]"));

  if (Array.isArray(savedHistory)) {
    quizHistory = savedHistory;
  }
} catch (error) {
  quizHistory = [];
}

// =========================

// DARK MODE

// =========================

let darkMode = getSavedValue("quizTheme", "light") === "dark";

function updateTheme() {
  document.body.classList.toggle("dark-mode", darkMode);

  if (themeButton) {
    themeButton.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

if (themeButton) {
  updateTheme();

  themeButton.addEventListener("click", function () {
    darkMode = !darkMode;

    saveValue("quizTheme", darkMode ? "dark" : "light");

    updateTheme();
  });
}

// =========================

// SOUND EFFECTS

// =========================

let soundEnabled = getSavedValue("quizSound", "on") !== "off";

let audioContext = null;

function updateSoundButton() {
  if (soundButton) {
    soundButton.textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
  }
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playSound(type) {
  if (!soundEnabled) return;

  try {
    const context = getAudioContext();

    if (!context) return;

    let frequencies;

    if (type === "correct") {
      frequencies = [660, 880];
    } else if (type === "incorrect") {
      frequencies = [300, 220];
    } else if (type === "timeout") {
      frequencies = [440, 330, 220];
    } else {
      return;
    }

    const now = context.currentTime;

    frequencies.forEach(function (frequency, index) {
      const oscillator = context.createOscillator();

      const gain = context.createGain();

      const startTime = now + index * 0.13;

      oscillator.type = "sine";

      oscillator.frequency.setValueAtTime(frequency, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);

      gain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.02);

      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.12);

      oscillator.connect(gain);

      gain.connect(context.destination);

      oscillator.start(startTime);

      oscillator.stop(startTime + 0.13);
    });
  } catch (error) {
    console.warn("Could not play sound:", error);
  }
}

if (soundButton) {
  updateSoundButton();

  soundButton.addEventListener("click", function () {
    soundEnabled = !soundEnabled;

    updateSoundButton();

    saveValue("quizSound", soundEnabled ? "on" : "off");

    if (soundEnabled) {
      playSound("correct");
    }
  });
}

// =========================

// SHUFFLE QUESTIONS

// =========================

function shuffleQuestions(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

// =========================

// START QUIZ

// =========================

startButton.addEventListener("click", function () {
  selectedCategory = categorySelect.value;

  selectedDifficulty = difficultySelect.value;

  // "Default" means all categories or all difficulty levels.

  const filteredQuestions = questions.filter(function (question) {
    const categoryMatches =
      selectedCategory === "Default" || question.category === selectedCategory;

    const difficultyMatches =
      selectedDifficulty === "Default" ||
      question.difficulty === selectedDifficulty;

    return categoryMatches && difficultyMatches;
  });

  if (filteredQuestions.length === 0) {
    alert("No questions available for this selection.");

    return;
  }

  // Use 10 random questions, or fewer if the selection has fewer.

  quizQuestions = shuffleQuestions(filteredQuestions);

  currentQuestionIndex = 0;

  score = 0;

  answered = false;

  setupScreen.style.display = "none";

  resultScreen.style.display = "none";

  historyScreen.style.display = "none";

  quizScreen.style.display = "block";

  introText.style.display = "none";

  quizCategoryElement.textContent = `${selectedCategory} - ${selectedDifficulty}`;

  loadQuestion();
});

// =========================

// LOAD QUESTION

// =========================

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

  // Shuffle the options for every question.

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

// =========================

// TIMER

// =========================

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

        playSound("timeout");

        disableOptions();

        showCorrectAnswer();

        nextButton.style.display = "block";
      }
    }
  }, 1000);
}

// =========================

// SELECT ANSWER

// =========================

function selectAnswer(selectedButton, selectedOption) {
  if (answered) return;

  answered = true;

  clearInterval(timerInterval);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;

    selectedButton.classList.add("correct");

    playSound("correct");
  } else {
    selectedButton.classList.add("incorrect");

    playSound("incorrect");

    showCorrectAnswer();
  }

  disableOptions();

  nextButton.style.display = "block";
}

// =========================

// DISABLE OPTIONS

// =========================

function disableOptions() {
  const optionButtons = optionsElement.querySelectorAll(".option-btn");

  optionButtons.forEach(function (button) {
    button.disabled = true;
  });
}

// =========================

// SHOW CORRECT ANSWER

// =========================

function showCorrectAnswer() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const optionButtons = optionsElement.querySelectorAll(".option-btn");

  optionButtons.forEach(function (button) {
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });
}

// =========================

// NEXT QUESTION

// =========================

nextButton.addEventListener("click", function () {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// =========================

// SHOW RESULT AND SAVE HISTORY

// =========================

function showResult() {
  clearInterval(timerInterval);

  quizScreen.style.display = "none";

  resultScreen.style.display = "block";

  const totalQuestions = quizQuestions.length;

  const percentage = Math.round((score / totalQuestions) * 100);

  finalScoreElement.textContent = `Your Score: ${score} / ${totalQuestions}`;

  percentageElement.textContent = `Percentage: ${percentage}%`;

  // Update best score.

  if (score > bestScore) {
    bestScore = score;

    saveValue("quizBestScore", String(bestScore));
  }

  bestScoreElement.textContent = `Best Score: ${bestScore}`;

  // Performance message.

  if (percentage === 100) {
    performanceElement.textContent = "Excellent! Perfect score!";
  } else if (percentage >= 70) {
    performanceElement.textContent = "Great job! You did really well.";
  } else if (percentage >= 40) {
    performanceElement.textContent = "Good effort! Keep practicing.";
  } else {
    performanceElement.textContent = "Keep learning! You will improve.";
  }

  // Save this attempt in history.

  const historyRecord = {
    category: selectedCategory,

    difficulty: selectedDifficulty,

    score: score,

    totalQuestions: totalQuestions,

    percentage: percentage,

    date: new Date().toLocaleString(),
  };

  quizHistory.unshift(historyRecord);

  // Keep only the latest 100 attempts.

  if (quizHistory.length > 100) {
    quizHistory = quizHistory.slice(0, 100);
  }

  saveValue("quizHistory", JSON.stringify(quizHistory));
}

// =========================

// DISPLAY QUIZ HISTORY

// =========================

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

// =========================

// VIEW QUIZ HISTORY

// =========================

viewHistoryButton.addEventListener("click", function () {
  resultScreen.style.display = "none";

  historyScreen.style.display = "block";

  displayHistory();
});

// =========================

// BACK TO SETUP FROM QUIZ

// =========================

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

// =========================

// BACK TO SETUP FROM HISTORY

// =========================

backToSetupButton.addEventListener("click", function () {
  historyScreen.style.display = "none";

  resultScreen.style.display = "none";

  quizScreen.style.display = "none";

  setupScreen.style.display = "block";

  introText.style.display = "block";
});

// =========================

// CHOOSE AGAIN

// =========================

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

// =========================

// INITIAL SETUP

// =========================

// Display saved best score when the page loads.

bestScoreElement.textContent = `Best Score: ${bestScore}`;

// Keep all screens in their initial state.

quizScreen.style.display = "none";

resultScreen.style.display = "none";

historyScreen.style.display = "none";

setupScreen.style.display = "block";

console.log("Quiz Master loaded successfully!");

console.log("Total questions available:", questions.length);

// =====================================
// QUIZ RULES MODAL
// =====================================

const rulesButton = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const closeRulesButton = document.getElementById("close-rules-btn");
const gotItButton = document.getElementById("got-it-btn");

function openRulesModal() {
  if (!rulesModal) return;

  rulesModal.style.display = "flex";

  if (closeRulesButton) {
    closeRulesButton.focus();
  }
}

function closeRulesModal() {
  if (!rulesModal) return;

  rulesModal.style.display = "none";

  if (rulesButton) {
    rulesButton.focus();
  }
}

if (rulesButton) {
  rulesButton.addEventListener("click", openRulesModal);
}

if (closeRulesButton) {
  closeRulesButton.addEventListener("click", closeRulesModal);
}

if (gotItButton) {
  gotItButton.addEventListener("click", closeRulesModal);
}

// Close when clicking outside the popup.
if (rulesModal) {
  rulesModal.addEventListener("click", function (event) {
    if (event.target === rulesModal) {
      closeRulesModal();
    }
  });
}

// Close using Escape.
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    rulesModal &&
    rulesModal.style.display !== "none"
  ) {
    closeRulesModal();
  }
});

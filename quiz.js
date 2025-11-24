// JavaScript Console Quiz Game with custom natural questions

const quiz = [
  { question: "How many days are there in a leap year?", answer: "366" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "Which data type is used to store true or false values in JavaScript?", answer: "boolean" },
  { question: "Which symbol is used for single-line comments in JavaScript? (// or /*)", answer: "//" },
  { question: "What is the shortcut key to copy on a computer? (e.g., Ctrl+A/B/C)", answer: "ctrl+c" }
];

function runQuiz() {
  let score = 0;

  alert("Welcome to the Quiz Game! Answer each question carefully.");

  for (let i = 0; i < quiz.length; i++) {
    let userInput = prompt(`Q${i + 1}: ${quiz[i].question}`);

    if (userInput === null) {
      userInput = "";
    }

    userInput = userInput.toLowerCase().trim();

    if (userInput === quiz[i].answer) {
      score++;
      alert("Correct! 🎉");
    } else {
      alert(`Wrong ❌\nCorrect answer: ${quiz[i].answer}`);
    }
  }

  alert(`Quiz Completed!\nYour Score: ${score} / ${quiz.length}`);
  console.log(`Final Score: ${score} / ${quiz.length}`);
}

runQuiz();

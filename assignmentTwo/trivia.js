const form = document.querySelector('#form');

const startButton = document.getElementById('start-button');
const roundOne = document.getElementById('round-one');
const submitButton = document.getElementById('next-round-button');




const roundOneQuestions = [
  {
    input: document.getElementById('num-planets-input'),
    reactionArea: document.getElementById('num-planets-reaction'),
    answer: 9,
  },
  {
    input: document.getElementById('star-name-input'),
    reactionArea: document.getElementById('star-name-reaction'),
    answer: 'Sol',
  },
];

const nextRoundButton = document.getElementById('next-round-button');
const roundTwo = document.getElementById('round-two');

const roundTwoQuestions = [
  {
    input: document.getElementById('galilean-moons-input'),
    reactionArea: document.getElementById('galilean-moons-reaction'),
    answer: 4,
  },
  {
    input: document.getElementById('surface-temp-input'),
    reactionArea: document.getElementById('surface-temp-reaction'),
    answer: 'Venus',
  },
];

const finishButton = document.getElementById('finish-button');
const finalScore = document.getElementById('final-score');

const scores = [];


startButton.addEventListener('click', startGame); //moved the event listener to here


function startGame(event) {
  console.log('game started');
  event.preventDefault();
  roundOne.classList.remove('hidden');
  startButton.classList.add('hidden');


  for (let i = 0; i < roundOneQuestions.length; i++) {
    const question = roundOneQuestions[i];

    function answerQuestion() {
      let score;
      if (question.input.value == question.answer) {
        score = 1;

        question.reactionArea.innerText = 'Congrats! You got the question right!';
        question.reactionArea.classList.add('correct');
        question.reactionArea.classList.remove('incorrect');
      } else {
        score = 0;

        question.reactionArea.innerText = "Not quite right, but you're almost there!";
        question.reactionArea.classList.add('incorrect');
        question.reactionArea.classList.remove('correct');
      }

      if (scores.length <= i) {
        scores.push(score);
      } else {
        scores[i] = score;
      }
    }

    // startButton.addEventListener('click', startGame);

    question.input.addEventListener('change', answerQuestion);

    question.deactivate = () => {
      question.input.removeEventListener('change', answerQuestion);
    };
  }

  submitButton.addEventListener('click', startRoundTwo);
}

function startRoundTwo(event) {

  event.preventDefault();

  console.log('round two started');

  if (scores.length < roundOneQuestions.length) {
    return;
  }

  roundTwo.classList.remove('hidden');
  nextRoundButton.classList.add('hidden');

  roundOneQuestions.forEach(question => question.deactivate());

  for (let i = 0; i < roundTwoQuestions.length; i++) {
    const question = roundTwoQuestions[i];

    function answerQuestion() {
      let score;
      if (question.input.value == question.answer) {//== not === for this case
        score = 1;

        question.reactionArea.innerText = 'Congrats! You got the question right!';
        question.reactionArea.classList.add('correct');
        question.reactionArea.classList.remove('incorrect');
      } else {
        score = 0;

        question.reactionArea.innerText = "Not quite right, but you're almost there!";
        question.reactionArea.classList.add('incorrect');
        question.reactionArea.classList.remove('correct');
      }

      const index = roundOneQuestions.length + i;
      if (scores.length <= index) {
        scores.push(score);
      } else {
        scores[index] = score;
      }
    }

    question.input.addEventListener('change', answerQuestion);

    question.deactivate = () => {
      question.input.removeEventListener('change', answerQuestion);
    };
  }

  // submitButton.removeEventListener('click', startRoundTwo);
  finishButton.addEventListener('click', finishGame);
}

function finishGame(event) {
  event.preventDefault();

  console.log('in finish game function');

  const totalLength = roundOneQuestions.length + roundTwoQuestions.length;

  if (scores.length < totalLength) {
    return;
  }

  roundTwoQuestions.forEach(question => question.deactivate());

  finishButton.classList.add('hidden');
  finalScore.classList.remove('hidden');

  let sum = 0;
  for (const score of scores) {
    sum += score;
  }

  finalScore.innerText = `You got ${sum} out of ${totalLength} questions right.`;
}
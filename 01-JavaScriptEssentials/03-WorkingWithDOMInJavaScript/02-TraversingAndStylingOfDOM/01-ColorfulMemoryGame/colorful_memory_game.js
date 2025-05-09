/* == Step 5: Defining variables to access data == */

// Game Variables
const colors = [
  'red', 'blue', 'green', 'purple', 'orange', 'pink',
  'red', 'blue', 'green', 'purple', 'orange', 'pink'
];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// DOM element Variables
const startBtn = document.getElementById('startBtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

/* == Step 6: Create and call functions to start the game == */

/**
 * For each color string in cards creates a div, assigns the div a class of
 * card, sets the 'dataset' to the color string, sets text to a question-mark
 * and adds to the container div.
 */
function generateCards() {
  for (const color of cards) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = color;
    card.textContent = '?';
    gameContainer.appendChild(card);
  }
}

/**
 * Shuffles the order of an array.
 *
 * @param {array} array - the list to be shuffled.
 * @returns {array} - the shuffled list
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * If clicked card has a class of 'card' or does not have a class of 'matched'
 * change textContent to the color string stored in dataset, set the color to
 * the color string stored in dataset, add the card to the list of
 * selectedCards and if there are two cards selected run checkMatch (with a half
 * second timeout)
 *
 * @param {event} e
 * @returns
 */
function handleCardClick(e) {
  const card = e.target;
  if (!card.classList.contains('card') || card.classList.contains('matched')) {
    return;
  }
  card.textContent = card.dataset.color;
  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 250);
  }
}

/**
 * Compare two cards in selectedCards list. If they match add 'matched' class,
 * increment score and modify score display. Else, reset textContent and
 * backgroundColor
 */
function checkMatch() {
  const [card1, card2] = selectedCards;
  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.textContent = '?';
    card2.textContent = '?';
    card1.style.backgroundColor = '#ddd';
    card2.style.backgroundColor = '#ddd';
  }
  selectedCards = [];
}

/**
 * Sets starting conditions for a new game.
 */
function startGame() {
  let timeLeft = 30;
  startBtn.disabled = true;
  score = 0; // Reset score to zero
  scoreElement.textContent = `Score: ${score}`;
  startGameTimer(timeLeft);
  cards = shuffle(colors.concat(colors));
  selectedCards = [];
  gameContainer.innerHTML = '';
  generateCards();
  gameContainer.addEventListener('click', handleCardClick);
}

/**
 * Timer for the game.
 *
 * @param {number} timeLeft - amount of time to add to timer
 */
function startGameTimer(timeLeft) {
  timerElement.textContent = `Time Left: ${timeLeft}`;
  gameInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      let timeLeft = 30;
      alert('Game Over!');
      startBtn.disabled = false;
    }
  }, 1000);
}

// Event Listener for start button
startBtn.addEventListener('click', startGame);

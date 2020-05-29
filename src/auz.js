let questionsAnswered = 0
let questionsCorrect = 0
let questionsIncorrect = 0
let animalsIncorrect = []

const answerBtns = document.querySelector('#answer-btns')
const animalPic = document.querySelector('#animal-pic')

const optionOneBtn = document.querySelector('#option1')
const optionTwoBtn = document.querySelector('#option2')
const optionThreeBtn = document.querySelector('#option3')
const gameEndStatsContainer = document.querySelector('#game-end-stats');

function auzMain () {
  handleAnswerBtnClick();
  getRandom(animals, 3);
  handleUsernameFormSubmit();
}

// getRandom = function (list) {
//   return list[Math.floor((Math.random()*list.length))];
// }

function handleUsernameFormSubmit () {
  const form = document.querySelector('#username-form')
  form.addEventListener('submit', event => {
    document.getElementById('login-view').style.display = 'none';
    document.getElementById('game-view').style.display = 'block';
    removeButtonsAndAnimal();
    gameEndStatsContainer.style.display = 'none';
  })
}

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  loadAnimalPicture(result);
  loadAnswers(result);
}

const animalSound = document.querySelector('#animal-sound')

function loadAnimalPicture (randArr) {
  const randomIndex = Math.floor(Math.random() * 3)
  const animalToRender = randArr[randomIndex]
  animalPic.src = animalToRender.image
  animalPic.name = animalToRender.name
  animalPic.dataset.id = animalToRender.id
  animalSound.src = animalToRender.sound
  if (animalSound.src !== '') {
    animalPic.addEventListener('click', event => {
      animalSound.play(); 
    })
  }
}

function loadAnswers (randArr) {
  optionOneBtn.innerHTML = randArr[0].name
  optionOneBtn.dataset.id = randArr[0].id

  optionTwoBtn.innerHTML = randArr[1].name
  optionTwoBtn.dataset.id = randArr[1].id
  
  optionThreeBtn.innerHTML = randArr[2].name
  optionThreeBtn.dataset.id = randArr[2].id
}

function handleAnswerBtnClick () {
  answerBtns.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON' && questionsAnswered < 5) {
      questionsAnswered++;
      checkAnswer(event);
      updateGameStats();
        if (questionsAnswered === 5) {
          alert('GAME OVER')
          updateUserStats();
          removeButtonsAndAnimal();
          runGameEndStats();
          gameEndStatsContainer.style.display = 'block';
          resetGameData();
        }
    }
  })
}

function resetGameData () {
  questionsAnswered = 0;
  questionsCorrect = 0;
  questionsIncorrect = 0;
  animalsIncorrect = [];
}

function checkAnswer (event) {
  if (event.target.dataset.id == animalPic.dataset.id) {
    questionsCorrect++;
    getRandom(animals, 3);

    console.log('CORRECT');
  } else {
    questionsIncorrect++;
    animalsIncorrect.push({
      userPicked: event.target.innerHTML,
      correctAnswer: animalPic.name
      })
    getRandom(animals, 3);
    console.log('WRONG')
  }
}



auzMain();
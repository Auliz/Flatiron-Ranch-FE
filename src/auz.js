let questionsAnswered = 0
let questionsCorrect = 0
let questionsIncorrect = 0
let animalsIncorrect = []

const answerBtns = document.querySelector('#answer-btns')
const animalPic = document.querySelector('#animal-pic')

const optionOneBtn = document.querySelector('#option1')
const optionTwoBtn = document.querySelector('#option2')
const optionThreeBtn = document.querySelector('#option3')

function auzMain () {
  handleAnswerBtnClick();
  getRandom(animals, 3);
}

// getRandom = function (list) {
//   return list[Math.floor((Math.random()*list.length))];
// } 

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
  loadAnswers(result);
  loadAnimalPicture(result);
}

function loadAnimalPicture (randArr) {
  const randomIndex = Math.floor(Math.random() * 3)
  const animalToRender = randArr[randomIndex]
  animalPic.src = animalToRender.image
  animalPic.name = animalToRender.name
  if (Math.random() < 0.5) {
    animalPic.className = 'animalone'
  } else {
    animalPic.className = 'animaltwo'
  }
}

function loadAnswers (randArr) {
  optionOneBtn.innerHTML = randArr[0].name
  optionTwoBtn.innerHTML = randArr[1].name
  optionThreeBtn.innerHTML = randArr[2].name
}

function handleAnswerBtnClick () {
  answerBtns.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON' && questionsAnswered < 5) {
      questionsAnswered++;
      checkAnswer(event);
    } else if (questionsAnswered === 5) {
      if (event.target.tagName === 'BUTTON') {
        console.log('GAME OVER')
      }
    }
  })
}

function checkAnswer (event) {
  if (event.target.innerHTML === animalPic.name) {
    questionsCorrect++;
    getRandom(animals, 3);

    console.log('CORRECT')
    console.log(questionsCorrect)
  } else {
    questionsIncorrect++;
    animalsIncorrect.push({
      userPicked: event.target.innerHTML,
      correctAnswer: animalPic.name
      })
    getRandom(animals, 3);

    console.log('WRONG')
    console.log(questionsIncorrect)
    console.log(animalsIncorrect)
  }
}

auzMain();
let questionsAnswered = 0
let questionsCorrect = []

const answerBtns = document.querySelector('#answer-btns')
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
  
}

function loadAnswers (randArr) {
  optionOneBtn.innerHTML = randArr[0].name
  optionTwoBtn.innerHTML = randArr[1].name
  optionThreeBtn.innerHTML = randArr[2].name
}

function handleAnswerBtnClick () {
  answerBtns.addEventListener('click', event => {
    if (event.target.id === 'option1') {
      checkAnswer(event);
    } else if (event.target.id === 'option2') {
      checkAnswer(event);
    } else if (event.target.id === 'option3') {
      checkAnswer(event);
    }
  })
}

function checkAnswer (event) {
  console.log(getRandom(animals, 3))
  // questionsAnswered++;
}

auzMain();
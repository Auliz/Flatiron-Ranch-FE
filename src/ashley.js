function ashleyMain () {
  loadLeaderboard();
}

const usersUrl = 'http://localhost:3000/users'
const userGamesUrl = 'http://localhost:3000/user_games'
const usersLeaderboardUrl = 'http://localhost:3000/users/leaderboard'

const leaderboardTableContainer = document.querySelector('#leaderboard-table')

function loadLeaderboard () {
  fetch(usersLeaderboardUrl)
    .then (response => response.json())
    .then (topUsers => {
      topUsers.forEach(topUser => {
        const leaderboardRow = `
        <tr>
          <th>${topUser.username}</th>
          <th>${topUser.total_points}</th>
        </tr>
        `
        leaderboardTableContainer.innerHTML += leaderboardRow
      })
    })
}

const usernameForm = document.querySelector('#username-form')
let userInfo

usernameForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = event.target.username.value

  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({username})
  }

  fetch(usersUrl, reqObj)
    .then (response => response.json())
    .then (user => {
      userInfo = user;
      renderUserStats(user);
    })
})

const userStatsContainer = document.querySelector('#user-stats')
const usernameContainer = document.querySelector('#user-username')
const totalPointsContainer = document.querySelector('#user-total-points')

function renderUserStats (user) {

  usernameContainer.dataset.userId = user.id
  usernameContainer.innerText = `Username: ${user.username}`
  totalPointsContainer.dataset.totalPoints = user.total_points
  totalPointsContainer.innerText = `Total Points: ${user.total_points}`

  // userStatsContainer.innerHTML = `
  // <p data-user-id=${user.id}>Username: ${user.username}</p>
  // <p id='user-total-points' data-total-points=${user.total_points}>Total Points: ${user.total_points}</p>
  // <p>Current language: </p>
  // `
}

const startGameButton = userStatsContainer.nextElementSibling
const numAnswered = document.querySelector('#num-answered')
const numCorrect = document.querySelector('#num-correct')

const gameStatsNumbers = document.querySelector('#game-stats-numbers')

startGameButton.addEventListener('click', event => {
  gameEndStatsContainer.innerHTML = ''
  const user_id = parseInt(userStatsContainer.firstElementChild.dataset.userId)
  const createNewGame = {
    user_id,
    game_id: 1
  }

  const newGameObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(createNewGame)
  }

  fetch (userGamesUrl, newGameObj)
    .then (response => response.json())
    .then (newGame => {
      console.log(newGame)

      numAnswered.innerText = newGame.num_answered
      numCorrect.innerText = newGame.num_correct
      gameStatsNumbers.dataset.gameId = newGame.id
    })

  animalPic.style.display = 'block';
  answerBtns.style.display = 'block'

  let audio = new Audio('sounds/cowboy_theme.mp3');
  audio.volume = 0.02;
  audio.play(); 
})

function updateGameStats() {
  const userGameId = parseInt(gameStatsNumbers.dataset.gameId)

  const updatedGameStats = {
    num_answered: parseInt(questionsAnswered),
    num_correct: parseInt(questionsCorrect)
  }

  numAnswered.innerText = questionsAnswered
  numCorrect.innerText = questionsCorrect

  const reqObjStats = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(updatedGameStats)
  }

  fetch(`${userGamesUrl}/${userGameId}`, reqObjStats)
    .then (response => response.json())
    .then (updatedGame => {
      console.log(updatedGame)
      
    })
}

function updateUserStats() {

  let userTotalPoints = 0

  fetch(`${usersUrl}/${userInfo.id}`)
    .then (response => response.json())
    .then (userWithNewGame => {
      userInfo = userWithNewGame

      userInfo.user_games.forEach(game => {
        userTotalPoints += (game.num_correct * 10)
      })
      
      totalPointsContainer.innerText = `Total Points: ${userTotalPoints}` 
      totalPointsContainer.dataset.totalPoints = userTotalPoints
      console.log(totalPointsContainer.dataset.totalPoints)
      
      const updatedTotalPoints = {
        total_points: userTotalPoints
      }
    
      const reqObjTotalPoints = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(updatedTotalPoints)
      }
    
      fetch(`${usersUrl}/${userInfo.id}`, reqObjTotalPoints)
        .then (response => response.json())
        .then (updatedUser => console.log(updatedUser))
    
      })
}

const gameContainer = document.querySelector('#game')

const gameEndStatsContainer = document.querySelector('#game-end-stats');

function runGameEndStats () {
  gameEndStatsContainer.innerHTML = `
    <h3>Thanks for your help! You got ${(questionsCorrect/questionsAnswered) * 100}% of the farm finds.</h3>
    <p>Correct Answers: ${questionsCorrect}</p>
    <p>Questions Answered: ${questionsAnswered}</p>
    <p>Game Points: ${questionsCorrect * 10}</p>
    <p>Your Total Points: ${parseInt(totalPointsContainer.dataset.totalPoints) + (questionsCorrect * 10)}</p>
    <p>Farmer Raza wants you to practice:</p>
      <ul>
        ${renderIncorrectAnimals()}
      </ul>
  `
}

let allIncorrectAnimals = []
let uniqueAnimalsList

function renderIncorrectAnimals () {

  animalsIncorrect.forEach(incorrectQuestion => {
    incorrectAnimals = Object.values(incorrectQuestion)
    allIncorrectAnimals.push(incorrectAnimals)
  })
  uniqueAnimalsList = allIncorrectAnimals.flat().unique()
  
  return uniqueAnimalsList.map(animal => {
    return `<li>${animal}</li>`
  }).join('')
}

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

function removeButtonsAndAnimal () {
  animalPic.style.display = 'none';
  answerBtns.style.display = 'none'

}

ashleyMain();

const mainLogo = document.querySelector('.main-logo');
const logoSound = document.querySelector('#animal-sound')

mainLogo.addEventListener('click', event => {
  logoSound.src = 'sounds/cow.mp3';
  animalSound.play();
})




// var audio = new Audio('sounds/cow.mp3');
// audio.play(); 
// console.log(audio)

// animalPic.addEventListener('click', event => {
//   // var x = document.getElementById("myAudio")
//   // x.play()
//   var audio = new Audio('sounds/cow.mp3');
//   audio.play(); 
// });

// var soundID = "Thunder";
// function loadSound () {
//   createjs.Sound.registerSound("assets/thunder.mp3", soundID);
// }

// function playSound () {
//   createjs.Sound.play(soundID);
// }
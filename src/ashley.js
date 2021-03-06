function ashleyMain () {
  loadLeaderboard();
  logoSoundClick();
}

const tl = gsap.timeline();
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
  const currentUser = document.querySelector('#user-current-username')
  const currentUserPoints = document.querySelector('#user-current-points')

  usernameContainer.dataset.userId = user.id
  currentUser.innerText = user.username
  currentUserPoints.innerHTML = `${user.total_points} (${badgeSelector(user.total_points)})`

  totalPointsContainer.dataset.totalPoints = user.total_points
}

const startGameButton = userStatsContainer.nextElementSibling
const onFarmAnswered = document.querySelector('#on-farm-display-answered')
const onFarmCorrect = document.querySelector('#on-farm-display-correct')

const gameStatsNumbers = document.querySelector('#pics')

startGameButton.addEventListener('click', event => {
  cardToAnimate.style.display = 'none';
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
      onFarmAnswered.innerText = newGame.num_answered
      onFarmCorrect.innerText = newGame.num_correct
      gameStatsNumbers.dataset.gameId = newGame.id
    })

  animalPic.style.display = 'block';
  answerBtns.style.display = 'block';

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

  // numAnswered.innerText = questionsAnswered
  // numCorrect.innerText = questionsCorrect
  onFarmAnswered.innerHTML = questionsAnswered
  onFarmCorrect.innerHTML = questionsCorrect

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
}


function updateUserStats() {
  let userTotalPoints = 0;

  fetch(`${usersUrl}/${userInfo.id}`)
    .then (response => response.json())
    .then (userWithNewGame => {
      userInfo = userWithNewGame

      userInfo.user_games.forEach(game => {
        userTotalPoints += (game.num_correct * 10)
      })
      const userTotalPointsContainer = document.querySelector('#user-current-points');
      const userTotalPointsNumber = parseInt(userTotalPoints);

      userTotalPointsContainer.innerHTML = `${userTotalPointsNumber} (${badgeSelector(userTotalPointsNumber)})`;
      totalPointsContainer.dataset.totalPoints = userTotalPointsNumber;

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
    })
}

const gameContainer = document.querySelector('#game')
const cardToAnimate = document.querySelector('#game-end-stats')

function runGameEndStats () {
  const statsPercent = document.getElementById('stats-p');
  const ansCorrect = document.querySelector('#ans-correct');
  const totalAnswered = document.querySelector('#total-answered');
  const gamePoints = document.querySelector('#game-points');
  const totalPoints = document.querySelector('#total-points');

  statsPercent.innerText = `${(questionsCorrect/questionsAnswered) * 100}% `
  ansCorrect.innerHTML = `${questionsCorrect}`
  totalAnswered.innerHTML = `${questionsAnswered}`
  gamePoints.innerHTML = `${questionsCorrect * 10}`
  totalPoints.innerHTML = `${parseInt(totalPointsContainer.dataset.totalPoints) + (questionsCorrect * 10)}`
  renderIncorrectAnimals();
  tl.from(cardToAnimate, {duration: 1.57, opacity: 0, y: -1000, ease: "power2.out"});
}

let allIncorrectAnimals = [];
let uniqueAnimalsList

function renderIncorrectAnimals () {
  const animalsWrongList = document.querySelector('#animals-wrong-list')
  const allCorrectListElement = document.querySelector('#all-correct-list')
  const farmerRazaPractice = document.querySelector('#animals-wrong')

  allCorrectListElement.style.display = 'none';
  if (questionsCorrect !== 5) {
    farmerRazaPractice.style.display = 'block';
    animalsIncorrect.forEach(incorrectQuestion => {
      incorrectAnimals = Object.values(incorrectQuestion)
      allIncorrectAnimals.push(incorrectAnimals)
    })
    uniqueAnimalsList = allIncorrectAnimals.flat().unique()
    
    return uniqueAnimalsList.map(animal => {
      return animalsWrongList.innerHTML += `<li class='trn'>${animal}</li>`
    }).join('')
  } else {
    farmerRazaPractice.style.display = 'none';
    allCorrectListElement.style.display = 'block';
  }
}


Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

function logoSoundClick () {
  const mainLogo = document.querySelector('.main-logo');
  const logoSound = document.querySelector('#logo-sound');
  mainLogo.addEventListener('click', event => {
    logoSound.src = 'sounds/cow.mp3';
    logoSound.play();
  })
}
function removeButtonsAndAnimal () {
  animalPic.style.display = 'none';
  answerBtns.style.display = 'none'
}

function badgeSelector(points) {
  const pointsNumber = parseInt(points)

  if (pointsNumber <= 500) {
    return `<i class="fas fa-egg icon-size trn"></i>`
  } else if (500 < pointsNumber <= 1000) {
    return `<i class="fas fa-hand-paper icon-size trn"></i>`
  } else if (1000 < pointsNumber <= 2500) {
    return `<i class="fas fa-hat-tractor icon-size trn"></i>`
  } else if (2500 < pointsNumber <= 5000) {
    return `<i class="fas fa-piggy-bank icon-size trn"></i>`
  } else if (5000 < pointsNumber) {
    return `<i class="fas fa-hat-cowboy icon-size trn"></i>`
  }
}

ashleyMain();
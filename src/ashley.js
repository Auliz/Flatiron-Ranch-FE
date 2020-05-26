function ashleyMain () {

}

const usersUrl = 'http://localhost:3000/users'
const userGamesUrl = 'http://localhost:3000/user_games'

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

function renderUserStats (user) {
  userStatsContainer.innerHTML = `
  <p data-user-id=${user.id}>Username: ${user.username}</p><p id='user-total-points'>Total Points: ${user.total_points}</p><p>Current language: </p>
  `
}

const startGameButton = userStatsContainer.nextElementSibling
let gameStatsNumbers = document.querySelector('#game-stats-numbers')

startGameButton.addEventListener('click', event => {
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
      const newGameStats = `
      <p id='num-answered'>${newGame.num_answered} Questions Answered</p>
      <p id='num-correct'>${newGame.num_correct} Correct</p>
      `
      
      gameStatsNumbers.innerHTML = newGameStats
      gameStatsNumbers.dataset.gameId = newGame.id
    })

  animalPic.style.display = 'block';
  answerBtns.style.display = 'block'
})

// function startGameSession (user) {

// }

function updateGameStats() {
  const userGameId = parseInt(gameStatsNumbers.dataset.gameId)

  const updatedGameStats = {
    num_answered: parseInt(questionsAnswered),
    num_correct: parseInt(questionsCorrect)
  }

  const latestGameStats = `
      <p id='num_answered'>${questionsAnswered} Questions Answered</p>
      <p id='num_correct'>${questionsCorrect} Correct</p>
      `
  gameStatsNumbers.innerHTML = latestGameStats

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
  const totalPointsContainer = document.querySelector('#user-total-points')

  let userTotalPoints = 0

  fetch(`${usersUrl}/${userInfo.id}`)
    .then (response => response.json())
    .then (userWithNewGame => {
      userInfo = userWithNewGame

      userInfo.user_games.forEach(game => {
        userTotalPoints += (game.num_correct * 10)
      })
      console.log('_________________', userWithNewGame)
      totalPointsContainer.innerText = `Total Points: ${userTotalPoints}` 
      
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

function runGameEndModal () {

  const modal = `
    <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
    </div>
    `
  gameContainer.innerHTML += modal 
} 

function removeButtonsAndAnimal () {
  animalPic.style.display = 'none';
  answerBtns.style.display = 'none'

}







ashleyMain();
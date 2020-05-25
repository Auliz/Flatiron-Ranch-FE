function ashleyMain () {


}

const usersUrl = 'http://localhost:3000/users'
const userGamesUrl = 'http://localhost:3000/user_games'

const usernameForm = document.querySelector('#username-form')

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
      renderUserStats(user);
    })
})

const userStatsContainer = document.querySelector('#user-stats')

function renderUserStats (user) {
  userStatsContainer.innerHTML = `
  <p data-user-id=${user.id}>Username: ${user.username}  |  Total Points: ${user.total_points}  |  Current language: </p>
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

  console.log(createNewGame)
  const newGameObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(createNewGame)
  }

  console.log(newGameObj)
  fetch (userGamesUrl, newGameObj)
    .then (response => response.json())
    .then (newGame => {
      
      const newGameStats = `
      <p id='num_answered' data-id=${newGame.id}>${newGame.num_answered} Questions Answered</p>
      <p id='num_correct'>${newGame.num_correct} Correct</p>
      `
      gameStatsNumbers.innerHTML = newGameStats
    })
})

function startGameSession (user) {

}

ashleyMain();
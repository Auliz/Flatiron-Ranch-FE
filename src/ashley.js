function ashleyMain () {


}

const usersUrl = 'http://localhost:3000/users'

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
  <p>Username: ${user.username}  |  Total Points: ${user.total_points}  |  Current language: </p>
  `
}


// console.log(userStatsContainer.lastChild)
function startGameSession (user) {

}

ashleyMain();
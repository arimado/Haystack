const SERVER_URL = 'http://localhost:3005/';
const USER_ENDPOINT = SERVER_URL + 'user/';


const postUser = user => fetch({ 'method': 'POST', 'body': user})
  .then(parseJSONifOkay)

function parseJsonIfOkay(response) {
  if (response.ok) return response.json()
  else throw new Error("Response is not okay")
}

export {
  SERVER_URL,
  USER_ENDPOINT,
  postUser
}

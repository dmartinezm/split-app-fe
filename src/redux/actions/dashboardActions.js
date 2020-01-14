const BASE_URL = "http://localhost:3000";
const USERS_URL = BASE_URL + "/users";
const PERSIST_URL = BASE_URL + "/persist";
const LOGIN_URL = BASE_URL + "/login";
const SPECIFIC_USER_URL = id => USERS_URL + "/" + id;

const getGroups = groupData => ({
  type: "GET_GROUP",
  payload: groupData
});

const fetchGroups = groupData => dispatch => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(groupData)
  };
  fetch(SPECIFIC_USER_URL(1), config)
    .then(r => r.json())
    .then(data => {
      dispatch(getGroups(data));
      //   localStorage.setItem("token", data.token);
    });
};

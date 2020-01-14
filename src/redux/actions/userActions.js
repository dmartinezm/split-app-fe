// Redux actions are nothing more than JavaScript objects
// JavaScript object with two properties: type and payload.
// The type property drives how the state should change and it’s always required by Redux.
// The payload property instead describes what should change,
//  and might be omitted if you don’t have new data to save in the store
// As a best practice in Redux we wrap every action within a function, so that object creation is
// abstracted away. Such function takes the name of action creator

const BASE_URL = "http://localhost:3000";
const USERS_URL = BASE_URL + "/users";
const PERSIST_URL = BASE_URL + "/persist";
const LOGIN_URL = BASE_URL + "/login";
const SPECIFIC_USER_URL = id => USERS_URL + "/" + id;

const setUserAction = userObj => ({
  type: "SET_USER",
  payload: userObj
});

const clearUserAction = () => ({
  type: "CLEAR_USER"
});

const persistUserFromAPI = () => dispatch => {
  fetch(PERSIST_URL, {
    headers: {
      "content-type": "application/json",
      Authorization: "bearer " + localStorage.token
    }
  })
    .then(r => r.json())
    .then(user => {
      dispatch(setUserAction(user));
    });
};

const newUserToDB = userObj => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObj)
  };
  fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem("token", data.token);
    });
};

const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: "DELETE"
  };
  fetch(SPECIFIC_USER_URL(userId), config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem("token", data.token);
    });
};

const persistUser = () => dispatch => {
  const config = {
    method: "GET",
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  persistUser,
  logoutUser,
  persistUserFromAPI
};

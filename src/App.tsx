import React, { useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import Nav from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userActions from "./redux/actions/userActions";

const App = () => {
  // const username = useSelector(state => state.userObj.username)
  // const state = useSelector(state => {
  //   return {
  //     user: state.currentUser
  //   };
  // });
  // const state = (state): User => state.currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUserFromAPI());
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;

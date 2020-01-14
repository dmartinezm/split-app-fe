import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  );
};

export default NavBar;

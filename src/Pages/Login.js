import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

const LoginPage = props => {
  // initialize dispatch
  const dispatch = useDispatch();
  // set up local state using useState hook
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push("/");
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { email, password } = loginForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  );
};

export default LoginPage;

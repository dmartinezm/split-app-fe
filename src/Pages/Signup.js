import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: ""
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(signupForm));
    history.push("/");
  };

  // Destructuring keys from our local state to use in the form
  const { first_name, last_name, email, password } = signupForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <input
        type="text"
        name="first_name"
        value={first_name}
        onChange={handleChange}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        name="last_name"
        value={last_name}
        onChange={handleChange}
        placeholder="Last Name"
      />{" "}
      <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />{" "}
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />{" "}
      <br />
      <input type="submit" />
    </form>
  );
};

export default Signup;

import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector(state => state.first_name);
  const state = useSelector(state => state);
  console.log(state);

  const text = username ? (
    <h1>{username} is currently logged in</h1>
  ) : (
    <h1>Nobody is logged in</h1>
  );
  return <div>{text}</div>;
};

export default Home;

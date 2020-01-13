// Redux actions are nothing more than JavaScript objects
// JavaScript object with two properties: type and payload.
// The type property drives how the state should change and it’s always required by Redux.
// The payload property instead describes what should change,
//  and might be omitted if you don’t have new data to save in the store
// As a best practice in Redux we wrap every action within a function, so that object creation is
// abstracted away. Such function takes the name of action creator
import { ADD_ARTICLE } from "./constants/action-types";

function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  };
}

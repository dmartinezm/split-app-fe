import { createStore } from "redux";
import roodReducer from "./reducers/index";

// You may also pass an initial state to createStore, useful for server side rendering and state preloading

// reducers produce the state of your application.
const store = createStore(rootReducer);

export default store;

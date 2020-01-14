// A Redux reducer is just a JavaScript function.
// It takes two parameters: the current state and action

// second principle of Redux says the only way to change the state is
// by sending a signal to the store. This signal is an action. So “dispatching an action”
// means sending out a signal to the store.

// third principle of Redux :  prescribes that the state is immutable and cannot change in place.
// reducer must be pure. A pure function is one that returns the exact same output for the given input.

// Remember two key points for avoiding mutations in Redux:

// 1. use concat(), slice(), or the spread operator for arrays
// 2. use Object.assign() or object spread of objects

// const rootReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case "SET_USER":
//       return payload;
//     case "CLEAR_USER":
//       return {};
//     default:
//       return state;
//   }
// };

// export default rootReducer;

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return payload;
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};

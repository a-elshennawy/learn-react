// it's so similar to UseState but it allows you to manipulate multiple stuff (go to line 35 first)
import { useReducer, useEffect } from "react";

// this is where stuff going (state,actions applied to state)
const reducer = (state, action) => {
  // using switch case to handle what will happen to your state
  switch (action.type) {
    // ...state, to prevent switching the boolean expression or messing with other values
    case "plus": //whatever is between the "" is what you will call when you want to trigger this action
      return {
        ...state,
        count: state.count + 1,
        lastAction: "you just did +1 count",
      };
    case "minus":
      return {
        ...state,
        count: state.count - 1,
        lastAction: "you just did -1 count",
      };
    case "multiple":
      return {
        ...state,
        count: state.count * 2,
        lastAction: "you just multiplied the count",
      };
    case "reset":
      return { ...state, count: 0, lastAction: "you just did reset count" };
    case "update_username":
      return {
        ...state,
        // getting the dynamic data from the input
        username: action.payload, //playload is a convention name you can use any name you want
        lastAction: "you just updated username",
      };
    case "toggle_theme":
      return {
        ...state,
        darkMode: !state.darkMode,
        lastAction: `you just switched to ${
          state.darkMode ? "light" : "dark"
        } mode`,
        // in here it's reversed as the last action deals with the old not the new dark mode vlaue
      };
  }
};

export default function UseReducer() {
  // here you start declaring state (stuff to manipulate) and dispatch (which will have the actions changing the state)

  // reducer ? go to line 4
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    username: "",
    darkMode: true,
    lastAction: "no actions yet",
  }); //what was between the {} is the state initial value

  // this is just to acctually change the theme
  useEffect(() => {
    document.body.className = state.darkMode ? "dark" : "light";
  }, [state.darkMode]);

  return (
    <>
      {/* counter */}
      <div>
        <h2>count : {state.count}</h2>
        {/* here we use the dispatch giving which action type we need to do */}
        <button onClick={() => dispatch({ type: "plus" })}>+</button>
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
        <button onClick={() => dispatch({ type: "multiple" })}>x2</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      {/* username */}
      <div>
        <h2>username : {state.username || "not set yet"}</h2>
        <input
          type="text"
          value={state.username}
          onChange={(e) => {
            // here we are giving it a payload to give a vlue up there in the reducer as a dynamic data
            dispatch({ type: "update_username", payload: e.target.value }); //whatever is between the () is the action object including type
          }}
          placeholder="enter a username"
        />
      </div>
      {/* theme mode */}
      <div>
        {/* simple switch as it's a boolean expression */}
        <h2>dark mode : {state.darkMode ? "ON" : "OFF"}</h2>
        <button onClick={() => dispatch({ type: "toggle_theme" })}>
          toggle dark mode
        </button>
      </div>
      {/* last action */}
      <p>last action : {state.lastAction}</p>
    </>
  );
}

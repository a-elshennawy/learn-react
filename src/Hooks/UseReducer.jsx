import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "multiple":
      return { count: state.count * 2 };
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>
        <h2>count : {state.count}</h2>
        <button onClick={() => dispatch({ type: "plus" })}>+</button>
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
        <button onClick={() => dispatch({ type: "multiple" })}>x2</button>
      </div>
    </>
  );
}

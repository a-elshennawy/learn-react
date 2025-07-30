import { useState } from "react";

export default function UseState() {
  // the variable and the SetVariable as UseState(the initial value for your variable)
  const [count, setCount] = useState(0);

  // here's just simple functions to handle hoe your variable changes
  // (SetVariable((variable)=> whatever you need to happen to your variable))

  const incCount = () => {
    setCount((count) => count + 1);
  };

  const decCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={decCount}>-</button>
    </>
  );
}

// yet be aware, the state will loop it self on every render
// have alook on useCallback and UseMemo

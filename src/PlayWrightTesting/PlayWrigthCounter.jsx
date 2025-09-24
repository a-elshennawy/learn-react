import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

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

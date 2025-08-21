import { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Parent Component</h1>
        <button onClick={() => setCount(count + 1)}>
          Update Count: {count}
        </button>
        <ExpensiveComponent />
      </div>
    </>
  );
}

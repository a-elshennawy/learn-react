// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";

export default function Reset() {
  // only using what we need from the state
  const reset = useComplexStore((state) => state.reset);

  return (
    <>
      <button onClick={reset}>0</button>
    </>
  );
}

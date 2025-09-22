// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";
export default function Multiply() {
  // selecting only multiply state
  const multiply = useComplexStore((state) => state.multiply);

  return (
    <>
      <button onClick={multiply}>x 2</button>
    </>
  );
}

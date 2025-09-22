// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";
export default function Split() {
  // same as the rest of components
  const split = useComplexStore((state) => state.split);

  return (
    <>
      <button onClick={split}>÷ 2</button>
    </>
  );
}

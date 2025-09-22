// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";

export default function Inc() {
  // same what's done in Count.jsx
  const inc = useComplexStore((state) => state.inc);
  return (
    <>
      <button onClick={inc}>+</button>
    </>
  );
}

// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";

export default function Dec() {
  // same select technique to avoid unneeded render
  const dec = useComplexStore((state) => state.dec);

  return (
    <>
      <button onClick={dec}>-</button>
    </>
  );
}

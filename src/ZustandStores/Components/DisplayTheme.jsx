// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";

export default function DisplayTheme() {
  // as done with count
  const theme = useComplexStore((state) => state.theme);

  // indicates not being rendered with other unrelated events
  console.log("theme display re-rendered");

  return (
    <>
      <h1>theme : {theme}</h1>
    </>
  );
}

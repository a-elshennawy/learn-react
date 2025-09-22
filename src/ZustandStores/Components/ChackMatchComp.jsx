// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";

export default function ChackMatchComp() {
  // be aware the match is a boolean expression
  const match = useComplexStore((state) => state.match);

  // to indicate it will not render unless the match is true
  console.log("number match render");

  return (
    <>
      {match && (
        <>
          <h1>number is matched</h1>
        </>
      )}
    </>
  );
}

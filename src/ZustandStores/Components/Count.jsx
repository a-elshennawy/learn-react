// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";

export default function Count() {
  // in here you are selecting ONLY the count form the state
  // so this component don't render unless the count (thing you selected) is changed
  const count = useComplexStore((state) => state.count);
  console.log("count display re-render");

  // you can check what i said by doing the belwo instead (apply it everywhere too)
  // const {count} = useComplexStore()

  return (
    <>
      <h1>count : {count}</h1>
    </>
  );
}

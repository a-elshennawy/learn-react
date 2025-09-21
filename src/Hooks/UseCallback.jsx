// it's almost the same as useMemo but instead storing the vlaue the coming out of the function it stores the whole function
import { useCallback, useEffect, useState } from "react";
export default function UseCallback() {
  // this the state that will be changing and cause the issue of re-rendering
  const [count, setCount] = useState(0);
  // another state to perserve it's function
  const [name, setName] = useState("ahmed");

  // this will be called wheneevr only count change
  const countChange = () => {
    setCount((count) => count + 1);
    console.log("count state is affected");
  };

  // this is just to trigger the DetectNameChange using the use Effect
  const namechanged = () => {
    setName((name) => name + "!");
  };

  // without the useCallback .. this will be triggered even when the count change due to the useEffect
  // but with useCallback .. only when the name changes
  const DetectNameChange = useCallback(() => {
    console.log("name state is affected");
    return name;
  }, [name]);

  useEffect(() => {
    DetectNameChange();
  }, [DetectNameChange]);

  return (
    <>
      {/* here is to use the toggle state and change it */}
      {count}
      <br />
      <button onClick={countChange}>change count</button>
      <br />
      {/* the state to protect */}
      {name}
      <br />
      <button onClick={namechanged}>change name</button>
    </>
  );
}
// so eventually .. usecallback is for functions not values

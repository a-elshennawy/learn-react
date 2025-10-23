// it's basically to access DOM directly & store values of previous states that changed
// even tho you don't wanna dispaly these values
import { useEffect, useRef, useState } from "react";
export default function UseRef() {
  // creating a refrence directly to a DOM element
  // we have to assign it to a DOM elemenmt to link it (ref={inputref})
  const inputRef = useRef();

  //   the function (current) doesn't cause rerender (that's the point)
  //   catching the ref. value
  const logRefValue = () => {
    console.log("ref. value:", inputRef.current.value);
  };

  //   focus on the ref.
  const focus = () => {
    inputRef.current.focus();
  };

  //   changing DOM without re-render UI
  const changRefValue = () => {
    inputRef.current.value = "Ahmed";
  };

  //   to detect page render (which will not happen)
  useEffect(() => {
    console.log("page re-rendered");
  });

  //   to store previous states
  const [count, setCount] = useState(0);

  //   here setting a ref to store the previous count innit
  //   (starting with 0 as we gonna use it as actuall variable)
  const previousCount = useRef(0);

  //   to track when count
  useEffect(() => {
    //it stores the count before the render and new vlalue will be shown in the UI
    previousCount.current = count;
  }, [count]);
  return (
    <>
      {/* here we gave the input the ref we created */}
      <h2>accessing / changing DOM with no render</h2>
      <input type="text" ref={inputRef} />
      <button onClick={logRefValue}>log</button>
      <button onClick={focus}>focus on input</button>
      <button onClick={changRefValue}>change value</button>
      <hr />
      {/* storing previous states */}
      <h2>storing previous states</h2>
      <h3>current count : {count}</h3>
      <h4>previous count : {previousCount.current}</h4>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        + count
      </button>
    </>
  );
}
// it's like a sticky note you put on a specific DOM element that doesn't effect the rest of ur component

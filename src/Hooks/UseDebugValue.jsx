// this one you will barely use at all
// it's for debugging .. it shows debgging value in React DevTool when u use it in your CUSTOME HOOKS
// not affecting any kind of fynctionality about your component

import { useDebugValue, useState } from "react";

// here we gonna create a custome hook to imitate the useState hook
function useCounter(initialvalue) {
  const [count, setCount] = useState(initialvalue);

  // here to debug with a simple example
  // this will appear in React DevTool
  useDebugValue(count > 10 ? "high" : "low");

  const incCount = () => setCount((count) => count + 1);
  return [count, incCount];
}

export default function UseDebugValue() {
  const [count, incCount] = useCounter(0);
  return (
    <>
      <h2>count : {count}</h2>
      <button onClick={incCount}>+</button>
    </>
  );
}
//  you will get the react DevTools extention here

//https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// you have to run " npm run build" to create a production build
// in inspect you will find far on the right some tab called component and there you find your debuffing values

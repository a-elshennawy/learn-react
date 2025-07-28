import { useState } from "react";

export default function UseState() {
  // the variable and the SetVariable as UseState(the initial value for your variable)
  const [fucks, setFucks] = useState(0);

  // here's just simple functions to handle hoe your variable changes
  // (SetVariable((variable)=> whatever you need to happen to your variable))

  const incFucks = () => {
    setFucks((fucks) => fucks + 1);
  };

  const decFucks = () => {
    setFucks((fucks) => fucks - 1);
  };

  return (
    <>
      <h1>i give {fucks} fucks</h1>
      <button onClick={incFucks}>more fucks</button>
      <button onClick={decFucks}>less fucks</button>
    </>
  );
}

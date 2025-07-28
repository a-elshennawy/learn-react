import { useState } from "react";

export default function UseState() {
  const [fucks, setFucks] = useState(0);

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

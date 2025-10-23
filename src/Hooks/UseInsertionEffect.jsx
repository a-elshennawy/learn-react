// it's used to insert specific styles in an component way to early when it comes to render
// just to avoid fleckring when painting

import { useInsertionEffect } from "react";
export default function UseInsertionEffect() {
  useInsertionEffect(() => {
    // creating the style we need to insert
    const style = document.createElement("style");
    style.textContent = `.dynamic-class{
  color:#000;
  background-color:#fd0;
  padding:20px;
  border-radius:10px;
  width:70%;
  margin:auto;
  }`;

    //   adding the style to the head
    document.head.appendChild(style);

    // clean up after component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="dynamic-class">
        <h3>styled with useInsertionEffect !!</h3>
      </div>
    </>
  );
}

// not too much here just recommended for those whoe have CSS libraries and so on

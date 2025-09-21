// think of useEffect but way less use cases
// it just does it work between the DOM existing and UI paint it to screen
import { useEffect, useLayoutEffect, useRef, useState } from "react";
export default function UseLayoutEffect() {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    //measure box width immediatly after render
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  });

  //you can uncomment this and comment the useLayoutEffect and hard refresh the page to see the different :)

  // useEffect(() => {
  //   if (boxRef.current) {
  //     setBoxWidth(boxRef.current.offsetWidth);
  //   }
  // });

  return (
    <>
      <div>
        <div
          ref={boxRef}
          style={{
            width: "40%", //<= offsetWidth
            margin: "auto",
            height: "100px",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          resize me using width prop in the style
        </div>
        {/* pay attention here while u try useLayoutEffect vs useEffect */}
        <p>current box width : {boxWidth} px</p>
        {/* useEffect will make it 0 px then gives you the measurement */}
        {/* useLayeoutEffect will immediatly give you the measurement */}
      </div>
    </>
  );
}
// so .. not gonna really use it but just for no flickering

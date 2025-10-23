// think of useEffect but way less use cases
// it just does it work between the DOM existing and UI paint it to screen
import { useEffect, useLayoutEffect, useRef, useState } from "react";
export default function UseLayoutEffect() {
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    //measure box width immediatly after render
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
      setBoxHeight(boxRef.current.offsetHeight);
    }
  });

  //you can uncomment this and comment the useLayoutEffect and hard refresh the page to see the different :)

  // useEffect(() => {
  //   if (boxRef.current) {
  //     setBoxWidth(boxRef.current.offsetWidth);
  //     setBoxHeight(boxRef.current.offsetHeight);
  //   }
  // });

  return (
    <>
      <div>
        <div
          ref={boxRef}
          style={{
            width: "50%", //<= offsetWidth
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            height: "150px", //<= offsetHeight
            backgroundColor: "#fd0",
            color: "#000",
          }}
        >
          <h2>resize me using width prop in the style</h2>
        </div>
        {/* pay attention here while u try useLayoutEffect vs useEffect */}
        <h3>current box width : {boxWidth} px</h3>
        <h3>current box width : {boxHeight} px</h3>
        {/* useEffect will make it 0 px then gives you the measurement */}
        {/* useLayeoutEffect will immediatly give you the measurement */}
      </div>
    </>
  );
}
// so .. not gonna really use it but just for no flickering

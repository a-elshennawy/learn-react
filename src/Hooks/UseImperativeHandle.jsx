//it's basicaly used when you are already using useRef
// it's for when you need a parent comp. to interact with a child comp. and specify what can it access init
import { useImperativeHandle, useRef, forwardRef } from "react";

// Parent
export default function UseImperativeHandle() {
  // declare a ref first
  const inputRef = useRef();
  return (
    <>
      {/* here we are accessing the child comp. using ref */}
      <CustomeInput ref={inputRef} />
      <button onClick={() => inputRef.current.refFocus()}>focus</button>
      <button onClick={() => inputRef.current.refClear()}>clear</button>
    </>
  );
}

// Child
const CustomeInput = forwardRef((props, ref) => {
  // declare a ref first
  const inputRef = useRef();

  //   using the hook to create methods to interact in a specific & cusomized way with the ref and allowing the access
  useImperativeHandle(ref, () => ({
    refFocus: () => {
      inputRef.current.focus();
    },
    refClear: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <>
      <input type="text" ref={inputRef} placeholder="type something..." />
    </>
  );
});

// not really gonna use it but just an "add to your knowledge" sorta thing :)

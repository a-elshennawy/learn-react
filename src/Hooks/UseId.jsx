import { useId } from "react";

// simply it generates really unique ids you can use for elelments to keep track of
export default function UseId() {
  const id = useId();
  const id2 = useId();

  return (
    <>
      {/* inspect and have a look on the element id */}
      <label htmlFor={id}>enter name</label>
      <input type="text" id={id} />

      <label htmlFor={id2}>enter name</label>
      <input type="text" id={id2} />
    </>
  );
}
// so important for those who gonna use SSR (server side rendering)
// so you don't have to overwhelm yourself with naming
// DO NOT USE THAT FOR KEY={} WHEN MAPPING OVER SOMETHING TO CREATE A LIST WE DON'T DO THAT HERE

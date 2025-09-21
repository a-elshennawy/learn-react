// create a function to track the mouse posoition
import { useEffect, useState } from "react";

// render props
export default function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const UpdatePositiion = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", UpdatePositiion);

    return () => {
      window.removeEventListener("mousemove", UpdatePositiion);
    };
  }, []);

  return (
    <>
      {/* in here we reneder the position (x,y) */}
      <div>{render(position)}</div>
    </>
  );
}

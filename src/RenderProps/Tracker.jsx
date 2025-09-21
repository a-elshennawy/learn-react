// here we gonna use the login in MouseTracker.jsx
import MouseTracker from "./MouseTracker";

export default function Tracker() {
  return (
    <>
      <h1>your mouse tracker says :</h1>
      {/* here we render the x,y which are being calculated in the render component --> (MouseTracker.jsx) */}
      {/* that's why it's called render props */}
      <MouseTracker
        render={({ x, y }) => (
          <h2>
            mouse at : ({x},{y})
          </h2>
        )}
      />
    </>
  );
}

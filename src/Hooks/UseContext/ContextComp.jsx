import { themeContext } from "./UseContext";
import { useContext } from "react";
import { ThemeToggle } from "./UseContext";

// this comp. is to demo. how to actually use the context across the app
// in cas importing it to App. make sure th wrap it within <useContext></usecontext> which is the comonent not the hook

export default function ContextComp() {
  // here u import what u need from the UseContext comp. which is theme so u can display theme name
  const { theme } = useContext(themeContext);

  return (
    <>
      <h3>current theme is : {theme}</h3>
      {/* and here's the component from the UseContext comp. */}
      <ThemeToggle />
    </>
  );
}

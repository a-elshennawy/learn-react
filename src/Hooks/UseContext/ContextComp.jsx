import { themeContext } from "./UseContext";
import { useContext } from "react";
import { ThemeToggle } from "./UseContext";

// this comp. is to demo. how to actually use the context across the app
// in case importing it to App. make sure to wrap it within <UseContext></UseContext> which is the component we made not the hook
// in actuall projects most likely you'll be callining it ThemeContext or ThemeProvider

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

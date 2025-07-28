import { themeContext } from "./UseContext";
import { useContext } from "react";
import { ThemeToggle } from "./UseContext";

export default function ContextComp() {
  const { theme } = useContext(themeContext);

  return (
    <>
      <h3>current theme is : {theme}</h3>
      <ThemeToggle />
    </>
  );
}

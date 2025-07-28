import { createContext, useContext, useEffect, useState } from "react";

export const themeContext = createContext();

export default function UseContext({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div>{children}</div>
      </themeContext.Provider>
    </>
  );
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <>
      <button
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        Switch to {theme === "ligh" ? "dark" : "ligh"} Mode
      </button>
    </>
  );
};

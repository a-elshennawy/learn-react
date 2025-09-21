// just a dark mode switch using local storage for better example & understanding
import { createContext, useContext, useEffect, useState } from "react";

// first you need to declare your context and make sure to export it too
export const themeContext = createContext();

// the comp. has the children as we going to wrap it around other comps across our app
export default function UseContext({ children }) {
  // here a simple use of useState as we gonna change (switch the theme state) but using local storage
  const [theme, setTheme] = useState(() => {
    // inside the state instead of a simple value we did a function to check what is in the local storage and if there's none then set it to dark theme
    return localStorage.getItem("theme") || "dark";
  });

  // here's to set the theme by adding the theme className to the whole body (check App.css) and set up local storage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  // and sure dep. list have the theme innit to change when theme change

  return (
    <>
      {/* we wrap up by your early declared context with value of things u need to manipulate */}
      <themeContext.Provider value={{ theme, setTheme }}>
        <div>{children}</div>
      </themeContext.Provider>
    </>
  );
}

// here's another comp. just as a switch between themes (have to be capitalized)
// this comp is the the actuall switch (instead of making a whole new comp just to implementt context innit)
export const ThemeToggle = () => {
  // here's to start using our Context by UseContext hook(your decraled Context)
  const { theme, setTheme } = useContext(themeContext);
  return (
    <>
      <button
        // a function using simple condition if it's light ? change it to dark or other wise change it to light
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        {/* ifit's light say dark other wise say light */}
        Switch to {theme === "ligh" ? "dark" : "ligh"} Mode
      </button>
    </>
  );
};

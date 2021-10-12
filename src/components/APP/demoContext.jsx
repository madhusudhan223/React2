import React, { useState } from "react";
import ClassContext from "./classContext";
import FunctionContext from "./functionContext";

export const ThemeContext = React.createContext();
export default function DemoContext() {
  const [darkTheme, setDarkTheme] = useState(true);
  function ToggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={ToggleTheme}>Toggle Theme</button>
        <FunctionContext />
        <ClassContext />
      </ThemeContext.Provider>
    </>
  );
}

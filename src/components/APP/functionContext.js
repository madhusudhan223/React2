import { useContext } from "react";
import { ThemeContext } from "./demoContext";

const FunctionContext = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>FunctionContext</div>;
};

export default FunctionContext;

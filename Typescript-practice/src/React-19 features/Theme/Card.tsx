import { use } from "react";
import { ThemeContext } from "./ThemeContext";

const Card = () => {
  const context = use(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <div className={theme === "light" ? "bg-white" : "bg-teal-900"}>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default Card;

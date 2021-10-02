import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = () => {
  const theme = useContext(ThemeContext);
  const greyMode = theme.state.greyMode;

  const onClick = () => {
    if (greyMode) {
      theme.dispatch({ type: "colorful" });
    } else {
      theme.dispatch({ type: "greyMode" });
    }
  };

  return (
    <div>
      <button onClick={onClick}>
        {greyMode ? "Switch to Colorful Mode" : "Switch to Greyscale Mode"}
      </button>
    </div>
  );
};

export default Button;

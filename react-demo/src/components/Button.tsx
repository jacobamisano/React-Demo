import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "react";
  onButtonClick: (response: string) => void;
}

function Button({ children, onButtonClick, color = "primary" }: ButtonProps) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => onButtonClick("You clicked the button!")}
    >
      {children}
    </button>
  );
}

export default Button;

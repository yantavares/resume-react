import { useState } from "react";
import "./Button.css";
function Button({ setIsSet, msg, state }) {
  const [isActive, setIsactive] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsactive(!isActive);
          setIsSet((prev) => {
            return prev === state ? 0 : state;
          });
        }}
        className={(isActive && "btn-active btn") || "btn"}
      >
        {msg}
      </button>
    </>
  );
}
export default Button;

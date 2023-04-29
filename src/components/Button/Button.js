import "./Button.css";
function Button({ setIsSet, msg, state }) {
  return (
    <>
      <button
        onClick={() => {
          setIsSet((prev) => {
            return prev === state ? 0 : state;
          });
        }}
        className="btn hs"
      >
        {msg}
      </button>
    </>
  );
}
export default Button;

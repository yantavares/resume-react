import "./App.css";
import Button from "../Button/Button.js";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="header">
        <FontAwesomeIcon
          className="icon"
          icon={faReact}
          spin
          size="3x"
          style={{ color: "#5d89e2" }}
        />
        <h1 className="welcome-msg hs">yantavares</h1>
      </header>
      <div className="welcome-border"></div>

      <section className="about">
        <Button />
      </section>
    </div>
  );
}

export default App;

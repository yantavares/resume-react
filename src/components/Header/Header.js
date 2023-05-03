import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-msg">
        <FontAwesomeIcon
          className="icon"
          icon={faReact}
          spin
          size="3x"
          style={{ color: "#5d89e2" }}
        />
        <a
          target="_blank"
          href="https://github.com/yantavares"
          className="welcome-msg hs"
        >
          yantavares
        </a>
      </div>
      <p id="easter-egg"> Click me!</p>
      <div className="welcome-border"></div>
    </header>
  );
}
export default Header;

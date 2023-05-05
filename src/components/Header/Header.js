import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import gopher from "../../images/gopher.png";

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
          href="https://github.com/yantavares"
          target="_blank"
          rel="noreferrer"
          className="welcome-msg hs"
        >
          yantavares
        </a>
      </div>
      <p id="easter-egg"> Click me!</p>
      <img id="gopher" src={gopher} alt="gopher" />
      <div className="welcome-border"></div>
    </header>
  );
}
export default Header;

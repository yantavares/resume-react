import "./App.css";
import Button from "../Button/Button.js";
import Header from "../Header/Header";
import About from "../About/About";
import { useState } from "react";
import Projects from "../Projects/Projects";
import Links from "../Links/Links";
import waves from "../../images/layered-waves-haikei.svg";
import Eye from "../Eye/Eye";
function App() {
  const [isSet, setIsSet] = useState(0);
  return (
    <div className="app">
      <Header />
      <Eye />
      <section className="buttons">
        <Button isSet={isSet} setIsSet={setIsSet} msg={"ABOUT"} state={1} />
        <Button isSet={isSet} setIsSet={setIsSet} msg={"PROJECTS"} state={2} />
        <Button isSet={isSet} setIsSet={setIsSet} msg={"LINKS"} state={3} />
      </section>
      {isSet === 1 && <About />}
      {isSet === 2 && <Projects />}
      {isSet === 3 && <Links />}

      <footer>
        <img className="footer-img" src={waves} alt="waves" />
      </footer>
    </div>
  );
}

export default App;

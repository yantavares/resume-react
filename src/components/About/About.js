import { useState } from "react";
import "./About.css";
import unb from "../../images/UnB.png";
import DevIcon from "devicon-react-svg";

function About() {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="about-container">
      <div className="about-2 about">
        <img style={{ width: "5rem" }} src={unb} alt="UnB" />
        {isActive === 0 && (
          <>
            <p>
              Graduando em Engenharia da Computação pela Universidade de
              Brasília (UnB)
            </p>
            <p>
              Estagiário em desenvolvimento de software pelo{" "}
              <a href="https://www.grupoorion.com.br/"> Grupo Orion</a>
            </p>
          </>
        )}
        {isActive === 1 && (
          <>
            <p>
              Undergraduate in Computer Engineering in University of Brasília
              (UnB)
            </p>
            <p>
              Software Development Intern at{" "}
              <a href="https://www.grupoorion.com.br/"> Orion Group</a>
            </p>
          </>
        )}
      </div>
      <div className="about">
        <div className="buttons">
          <button
            className={
              isActive === 1
                ? "btn btn-active btn-translate"
                : "btn btn-translate btn-translate-not-active"
            }
            onClick={() => setIsActive(1)}
          >
            en/us 🇺🇸
          </button>
          <button
            className={
              isActive === 0
                ? "btn btn-active btn-translate"
                : "btn btn-translate btn-translate-not-active"
            }
            onClick={() => setIsActive(0)}
          >
            🇧🇷 pt/br
          </button>
        </div>
        {isActive === 0 && (
          <>
            <p className="about-text">
              Sou estudante de Engenharia de Computação da Universidade de
              Brasília. Sou formado em inglês, morei por um ano na Califórnia e
              já trabalhei como tradutor de inglês. Minhas habilidades incluem
              programação, inglês, matemática, física e música.
            </p>
            <p className="about-text">
              O presente site é um currículo feito com as ferramentas React.js,
              HTML5, CSS3 e JavaScript. Fique à vontade para me mandar e-mails e
              sugestões!
            </p>
          </>
        )}
        {isActive === 1 && (
          <>
            <p className="about-text">
              I'm a Computer Engineering student at the University of Brasilia.
              I have a degree in English, I lived in California for a year and I
              have worked as an English translator. My skills include
              programming, English, math, physics and music.
            </p>
            <p>
              The present site is a curriculum made with React.js, HTML5, CSS3
              and JavaScript tools. Feel free to send me emails and suggestions!
            </p>
          </>
        )}
      </div>
      <div className="about-3 about">
        <DevIcon className="devicon" icon="code" />
        <DevIcon className="devicon" icon="python" />
        <DevIcon className="devicon" icon="haskell" />
        <DevIcon className="devicon" icon="visualstudio" />
        <DevIcon className="devicon" icon="linux" />
        <DevIcon className="devicon" icon="django" />
        <DevIcon className="devicon" icon="css3" />
        <DevIcon className="devicon" icon="html5" />
        <DevIcon className="devicon" icon="typescript_badge" />
        <DevIcon className="devicon" icon="javascript" />
        <DevIcon className="devicon" icon="dotnet" />
        <DevIcon className="devicon" icon="git" />
        <DevIcon className="devicon" icon="react" />
        <DevIcon className="devicon" icon="postgresql" />
        <DevIcon className="devicon" icon="go" />
        <p className="gambiarra-icon">C++</p>
        <p className="gambiarra-icon">C#</p>
      </div>
    </div>
  );
}
export default About;

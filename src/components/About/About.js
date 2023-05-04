import { useState } from "react";
import "./About.css";
import unb from "../../images/UnB.png";
import DevIcon from "devicon-react-svg";

function About() {
  const [isActive, setIsActive] = useState(0);
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
              isActive === 0
                ? "btn btn-active btn-translate"
                : "btn btn-translate btn-translate-not-active"
            }
            onClick={() => setIsActive(0)}
          >
            🇧🇷 pt/br
          </button>
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
        </div>
        {isActive === 0 && (
          <p className="about-text">
            PORTUGUES ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum eros ante, ultricies id mollis vel, imperdiet ut lorem.
            Ut venenatis vestibulum turpis. Vestibulum congue congue neque,
            tempor hendrerit ipsum. Suspendisse luctus imperdiet dolor non
            sodales. Phasellus aliquet, diam eget feugiat congue, neque neque
            euismod dolor, in sollicitudin diam ante ut eros. Quisque rutrum mi
            eu rutrum cursus. Mauris eget auctor velit. Nullam massa erat,
            malesuada ac bibendum sed, consequat vel odio. Mauris finibus dui
            sit amet luctus auctor.
          </p>
        )}
        {isActive === 1 && (
          <p className="about-text">
            EN ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eros ante, ultricies id mollis vel, imperdiet ut lorem. Ut venenatis
            vestibulum turpis. Vestibulum congue congue neque, tempor hendrerit
            ipsum. Suspendisse luctus imperdiet dolor non sodales. Phasellus
            aliquet, diam eget feugiat congue, neque neque euismod dolor, in
            sollicitudin diam ante ut eros. Quisque rutrum mi eu rutrum cursus.
            Mauris eget auctor velit. Nullam massa erat, malesuada ac bibendum
            sed, consequat vel odio. Mauris finibus dui sit amet luctus auctor.
          </p>
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

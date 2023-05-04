import { useState } from "react";
import "./About.css";
import unb from "../../images/UnB.png";

function About() {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="about-container">
      <div className="about">
        <div className="buttons">
          <button
            className={
              !isActive
                ? "btn btn-active btn-translate"
                : "btn btn-translate btn-translate-not-active"
            }
            onClick={() => setIsActive(0)}
          >
            🇧🇷 pt/br
          </button>
          <button
            className={
              isActive
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
            PT ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eros ante, ultricies id mollis vel, imperdiet ut lorem. Ut venenatis
            vestibulum turpis. Vestibulum congue congue neque, tempor hendrerit
            ipsum. Suspendisse luctus imperdiet dolor non sodales. Phasellus
            aliquet, diam eget feugiat congue, neque neque euismod dolor, in
            sollicitudin diam ante ut eros. Quisque rutrum mi eu rutrum cursus.
            Mauris eget auctor velit. Nullam massa erat, malesuada ac bibendum
            sed, consequat vel odio. Mauris finibus dui sit amet luctus auctor.
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
    </div>
  );
}
export default About;

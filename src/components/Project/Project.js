import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";

function Project({ name, description, html_url, owner }) {
  return (
    <div className="card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{name}</h2>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title small">
              {description || "No description provided"}
            </p>
            <div className="owner">
              <img
                style={{ width: "2rem", height: "2rem" }}
                src={owner.avatar_url}
                alt="avatar"
              />
              <h3>{owner.login}</h3>
            </div>

            <button className="btn btn-gh" target="_blank" href={html_url}>
              See on Github{" "}
              <FontAwesomeIcon className="gh" icon={faGithub} size="2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

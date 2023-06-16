import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";
import { useEffect, useState } from "react";

function Project({ name, description, html_url, owner, isForked }) {
  const [ownerName, setOwnerName] = useState("");

  useEffect(() => {
    if (owner.login === "yantavares") {
      setOwnerName("me");
    } else {
      setOwnerName(owner.login);
    }
  }, [owner]);

  useEffect(() => {
    if (isForked && !ownerName.includes("(forked)")) {
      setOwnerName(ownerName + " (forked)");
    }
  }, [isForked, ownerName]);

  return (
    <div className="card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{name}</h2>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="small">{description || "No description provided"}</p>
            <div className="owner">
              <img
                style={{ width: "2rem", height: "2rem" }}
                src={owner.avatar_url}
                alt="avatar"
              />
              <div className="owner-name">
                <h3 style={{ color: "bisque" }}>Owner:</h3>
                <h3 style={{ color: "beige" }}>{ownerName}</h3>
              </div>
            </div>

            <button
              className="btn btn-gh"
              onClick={() => {
                window.open(html_url);
              }}
            >
              See on Github
              <FontAwesomeIcon className="gh" icon={faGithub} size="2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

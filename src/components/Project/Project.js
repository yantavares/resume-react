import React from "react";
import "./Project.css";

function Project({ name, description, html_url, owner }) {
  return (
    <div className="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>

      {/* <div className="card">
        <a className="hs" target="_blank" href={html_url}>
          {name}
        </a>
        <p>{description}</p>
        <img
          style={{ width: "2rem", height: "2rem" }}
          src={owner.avatar_url}
          alt="avatar"
        />
        <h3>{owner.login}</h3>
      </div> */}
    </div>
  );
}

export default Project;

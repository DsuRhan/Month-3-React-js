import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  // bikin nama class dinamis
  const cardClass = `card-container ${props.character || ""}`;

  return (
    <div className={cardClass}>
      <header>
        <img src={props.photo} alt={props.name} />
      </header>
      <h1 className="bold-text">{props.name}</h1>
      <h2 className="normal-text">{props.bio}</h2>

      <div className="skills-container">
        <h3 className="bold-text">Skills</h3>
        <ul className="skills-list">
          {props.skills &&
            props.skills.map((skill, index) => (
              <li key={index} className="normal-text">
                {skill}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;

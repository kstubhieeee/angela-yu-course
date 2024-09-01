import React from "react";
import contacts from "../contacts";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.Name}</h2>
        <img
          className="circle-img"
          src={props.profile_images}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import Avatar from "./Avatar";

function Card(props) 
{
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
        <div className="bottom">
          <p className="info">Contact: {props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h1>{props.name}</h1>
        <Avatar img={props.img} /> 
      </div>
      <div className="bottom">
        
       <Detail info={props.email} />
       <Detail info={props.phone} />

      </div>
    </div>
  );
}
export default Card;

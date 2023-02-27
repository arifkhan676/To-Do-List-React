import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h1>{props.name}</h1>
        <img className="img-circle" src={props.img} alt="" />
      </div>
      <div className="bottom">
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}
export default Card;

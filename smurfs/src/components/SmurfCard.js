import React from "react";

const SmurfCard = (props) => {
  return (
    <div className="ui centered card blue">
      <div classname="content">
        <div className="center aligned header">
          <h1>{props.smurf.name}</h1>
        </div>
        <div className="center aligned description">
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.height}</p>
        </div>
      </div>
    </div>
  );
};

export default SmurfCard;

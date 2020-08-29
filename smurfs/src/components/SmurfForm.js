import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/smurfActions";
import { v4 as uuid } from "uuid";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: uuid(),
  });

  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
  };

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            style={{ width: "20%" }}
            name="name"
            value={smurf.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Age</label>
          <input
            style={{ width: "20%" }}
            name="age"
            value={smurf.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </div>

        <div className="field">
          <label>Height</label>
          <input
            style={{ width: "20%" }}
            name="height"
            value={smurf.height}
            onChange={handleChange}
            placeholder="Height in Inches"
          />
        </div>

        <button className="ui button" type="submit">
          {" "}
          Add Smurf!{" "}
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfForm);

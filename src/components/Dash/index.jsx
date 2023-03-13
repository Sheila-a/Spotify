import React from "react";
import { Link } from "react-router-dom";
import design from "./style.module.css";

const Dash = (props) => {
  return (
    <Link to={props.direct}>
      <div className={design.dash}>
        <img src={props.ico} alt="" />
        <p>{props.tags}</p>
      </div>
    </Link>
  );
};

export default Dash;

import React from "react";
import design from "./style.module.css";

const PCard = (props) => {
  return (
    <div className={design.container}>
      <img src={props.img} alt="jj" className={design.img} />
      <div className={design.bottom}>
        <div className={design.bottom_left}>
          <h5>{props.title}</h5>
          <p>{props.name}</p>
        </div>
        <div className={design.border}>
          <img src={props.img2} alt="" className={design.img2} />
        </div>
      </div>
    </div>
  );
};

export default PCard;

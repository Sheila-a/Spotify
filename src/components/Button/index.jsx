import React from "react";
import design from "./style.module.css";

const BTN = (props) => {
  return <button className={design.BTN}>{props.name}</button>;
};

export default BTN;

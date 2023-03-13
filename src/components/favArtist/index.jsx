import React from "react";
import design from "./style.module.css";

export const FavArtist = (props) => {
  return (
    <div className={design.favArtist}>
      <div className={design.FA_left}>
        <img src={props.img} alt="" />
        <div className={design.FA_left_inner}>
          <h5>{props.name}</h5>
          <p>{props.numb}</p>
        </div>
      </div>
      <div className={design.dropdown}>
        <p>..</p>
      </div>
    </div>
  );
};

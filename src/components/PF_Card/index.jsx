import React from "react";
import BTN from "../Button";
import design from "./style.module.css";

const PF_Card = (props) => {
  return (
    <div className={design.main_cont}>
      <div className={design.inner_cont}>
        <div className={design.gradient}></div>

        <div className={design.content}>
          <div className={design.content_1}>
            <p>Artist</p>
            <h1>
              On Top <br /> Of The World
            </h1>
          </div>
          <div className={design.content_2}>
            <div>
              <BTN name="PLAY" />
              <BTN name="FOLLOW" />
            </div>
            <div className={design.content_2_btm}>
              <p>Monthly Listener</p>
              <p>32.092</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PF_Card;

import React from "react";
import design from "./style.module.css";
// import LoadMe from "../../components/LoadMe/index.jsx";
// import Error from "../../components/Error/index.jsx";
// import SongCard from "../../components/SongCard/index.jsx";

const Trends = () => {
  return (
    <div className={design.container}>
      <div className={design.wrapper}>
        <h2>Trends </h2>
        <select name=" " id="" value="" onChange={() => {}}></select>
      </div>

      <div className={design.song_container}></div>
    </div>
  );
};

export default Trends;

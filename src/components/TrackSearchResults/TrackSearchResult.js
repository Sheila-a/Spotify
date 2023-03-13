import React from "react";
import design from "./style.module.css";

export default function TrackSearchResult({ track, chooseTrack }) {
  function playSong() {
    // this chooses track to play
    chooseTrack(track);
  }
  return (
    <div className={design.container} onClick={playSong}>
      <img src={track.albumUrl} className={design.img} alt="" />
      <div>
        <div className={design.title}>{track.title}</div>
        <div className={design.artist}>{track.artist}</div>
      </div>
    </div>
  );
}

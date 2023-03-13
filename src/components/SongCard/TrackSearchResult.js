import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function playSong() {
    // this chooses track to play
    chooseTrack(track);
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer", overflow: "hidden" }}
      onClick={playSong}
    >
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt=""
      />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
        <div className="text-muted">{track.time}</div>
      </div>
    </div>
  );
}

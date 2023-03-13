import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function playSong() {
    // this chooses track to play
    chooseTrack(track);
  }
  return (
    <div
      className=""
      style={{
        cursor: "pointer",
        margin: "2vh 1vh",
        width: "12vw",
        background: "#6a4f87",
        padding: "2vh",
        borderRadius: "10px",
        // gap: "2",
        // overflow: "scroll",
        // height: "20vh",
      }}
      onClick={playSong}
    >
      <img
        src={track.albumUrl}
        style={{
          // height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        alt=""
      />
      <div className="" style={{ textAlign: "center", padding: "10px" }}>
        <div style={{ fontWeight: "600", color: "#fff" }}>{track.title}</div>
        <div>{track.artist}</div>
        {/* <div className="text-muted">{track.time}</div> */}
      </div>
    </div>
  );
}

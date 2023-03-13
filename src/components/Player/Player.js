import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);
  if (!accessToken) return null;
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: " 2px 10px",
        borderRadius: "20px",
      }}
    >
      <SpotifyPlayer
        token={accessToken}
        //   save songs to spotify library
        showSaveIcon
        //   this callback funxtion will be called when user is not playing a song and turns setPlay to false
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        // if theres song to play, pass it into an array trackUri else pass it to an empty array
        uris={trackUri ? [trackUri] : []}
        // layout={"responsive"}
        inlineVolume={true}
        hideAttribution={true}
      />
    </div>
  );
}

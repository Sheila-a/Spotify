import React from "react";
import design from "./style.module.css";

// const AUTH_URL =
//   "https://accounts.spotify.com/authorize?client_id=c1c4bbeb184f4eec8d3ea2f8fb7f87c2&response_type=code&redirect_uri=https://sheila-spotify.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c1c4bbeb184f4eec8d3ea2f8fb7f87c2&response_type=code&redirect_uri=http://localhost:300&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <div className={design.main}>
      <div className={design.container}>
        <div className={design.btn_container}>
          <button className={design.btn1}>
            {" "}
            <a href={AUTH_URL}>Login to Spotify</a>
          </button>

          <button className={design.btn2}>
            <a href="https://www.spotify.com/ng/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F%3F">
              Sign up
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

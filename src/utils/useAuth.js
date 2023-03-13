import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code) {
  // store the 3 thingd we are returning from our server when user login: access token, refresh token and expiration
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  //   to get the information, use the useEffect Hook
  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        // to set the data collected
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        // to remove the token from the url. here everything is empty so just pushing the root url
        window.history.pushState({}, null, "/");
      })
      //   redirect user back to login incase of error
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  //   this means whenever refresh token changes or expiresIn changes, we run useEffect such that before token expires, we refresh the token
  useEffect(() => {
    // to prevent rerunning before token expires
    if (!refreshToken || !expiresIn) return;
    // timeframe for refresh token right before expiresIn expires
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          // to set the data collected. we only need access token and expiration
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        //   redirect user back to login incase of error
        .catch(() => {
          window.location = "https://sheila-spotify.netlify.app/";
        });
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  });

  //   this is what is used to call all the different spotify API's but only lasts for an hour
  return accessToken;
}

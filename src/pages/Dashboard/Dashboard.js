import React, { useEffect, useState } from "react";
import useAuth from "../../utils/useAuth";
import design from "../../pages/Home/style.module.css";
import Sidebar from "../../layouts/Sidebar";
import { Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "../../components/TrackSearchResults/TrackSearchResult";
import Player from "../../components//Player/Player";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
  // clientId: "ec1c22c038444dafb2c39b56f90cdc9c",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nowPlaying, setNowPlaying] = useState();
  const [lyrics, setLyrics] = useState("");

  function chooseTrack(track) {
    setNowPlaying(track);
    setSearch("");
    setLyrics("");
  }

  // for the lyrics
  useEffect(() => {
    if (!nowPlaying) return;

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: nowPlaying.title,
          artist: nowPlaying.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [nowPlaying]);

  // this is for whenever the access token changes, it should be set on the spotify API
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // this is for everytime the search query or access token changes
  useEffect(() => {
    // if no search, return empty array since there's nothing to search
    if (!search) return setSearchResults([]);
    // if no access token, return
    if (!accessToken) return;

    // the cancel variable lets you cancel the previous request when a new request is made
    let cancel = false;
    // search query for artist, tracks etc
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      // for items in tracks which include album, artist, name etc
      // console.log(res);
      setSearchResults(
        res.body.tracks.items.map((track) => {
          // to get the smallest size of images, we need to
          const smallestImage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images[0]);
          return {
            artist: track.artists[0].name,
            album: track.album.name,
            // name: track.name,
            // id: track.id,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestImage.url,
            time: track.album.name,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div className={design.dashboard}>
      <Sidebar />
      <div className={design.center}>
        <Form.Control
          className={design.form_control}
          type="search"
          placeholder="Search for artists, songs and..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={(e) => setSearch(e.target.value)}
        />

        <div className={design.results}>
          {searchResults.map((track) => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
          {searchResults.length === 0 && (
            <div className={design.lyrics}>{lyrics}</div>
          )}
        </div>
        <div>
          <Player accessToken={accessToken} trackUri={nowPlaying?.uri} />
        </div>
      </div>
    </div>
  );
}

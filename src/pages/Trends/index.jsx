import React from "react";
import design from "./style.module.css";
import LoadMe from "../../components/LoadMe/index.jsx";
import Error from "../../components/Error/index.jsx";
import { genres } from "../../data/Constants/constants.js";
import SongCard from "../../components/SongCard/index.jsx";
import { useGetTracksQuery } from "../../redux/services/spotifyCore";

const Trends = () => {
  const { data, nowFetching, error } = useGetTracksQuery();
  if (nowFetching) return <LoadMe message="Fetching songs..." />;
  if (error) return <Error />;
  console.log(data);
  const genreTitle = "Pop";
  return (
    <div className={design.container}>
      <div className={design.wrapper}>
        <h2>Trends {genreTitle}</h2>
        <select name=" " id="" value="" onChange={() => {}}>
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className={design.song_container}>
        {data.map((song, i) => (
          <SongCard key={song.id} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Trends;

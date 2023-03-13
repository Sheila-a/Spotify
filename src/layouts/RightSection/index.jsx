import React from "react";
import design from "./style.module.css";
import { Shortcut } from "../../components/shortcuts/index.jsx";
import { FavArtist } from "../../components/favArtist/index";
import { Freeze, Music, Piano, Star, Plus } from "../../assets/icons";
import Kana from "../../assets/img/Kana.jpg";
import PCard from "../../components/F_Card";
const RightSection = () => {
  return (
    <div className={design.right_container}>
      <h4 className={design.SH}>Shortcuts</h4>
      <div className={design.shorts}>
        <Shortcut img={Freeze} text={"Chill Hits"} />
        <Shortcut img={Star} text={"Hop"} />
        <Shortcut img={Freeze} text={"Accoustic"} />
        <Shortcut img={Music} text={"Indie Pop"} />
        <Shortcut img={Piano} text={"Piano Blues"} />
        <Shortcut img={Freeze} text={"Jazz"} />
      </div>
      <h4 className={design.FA}>Fav Artist</h4>
      <div>
        <FavArtist name="Taylor Swift" numb="196 songs in library" />
        <FavArtist name="Taylor Swift" numb="196 songs in library" />
        <FavArtist name="Taylor Swift" numb="196 songs in library" />
        <FavArtist name="Taylor Swift" numb="196 songs in library" />
      </div>
      <PCard title="Toriesetu" name="Kana Nishino" img={Kana} img2={Plus} />
    </div>
  );
};

export default RightSection;

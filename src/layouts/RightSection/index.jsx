import React from "react";
import design from "./style.module.css";
import { Shortcut } from "../../components/shortcuts/index.jsx";
import { FavArtist } from "../../components/favArtist/index";
import {
  Freeze,
  Music,
  Piano,
  Star,
  Plus,
  Trump,
  Guitar,
} from "../../assets/icons";
import { BiEi, TaSw, KaWe, DRa } from "../../assets/img";

import Kana from "../../assets/img/Kana.jpg";
import PCard from "../../components/F_Card";
const RightSection = () => {
  return (
    <div className={design.right_container}>
      <h3 className={design.SH}>Shortcuts</h3>
      <div className={design.shorts}>
        <Shortcut img={Freeze} text={"Chill Hits"} />
        <Shortcut img={Star} text={"Hop"} />
        <Shortcut img={Guitar} text={"Accoustic"} />
        <Shortcut img={Music} text={"Indie Pop"} />
        <Shortcut img={Piano} text={"Piano Blues"} />
        <Shortcut img={Trump} text={"Jazz"} />
      </div>
      <h3 className={design.FA}>Fav Artist</h3>
      <div>
        <FavArtist name="Taylor Swift" numb="196 songs in library" img={TaSw} />
        <FavArtist name="Kanye West" numb="124 songs in library" img={KaWe} />
        <FavArtist name="Drake" numb="50 songs in library" img={DRa} />
        <FavArtist
          name="Billie Eillish"
          numb="15 songs in library"
          img={BiEi}
        />
      </div>
      <PCard title="Toriesetu" name="Kana Nishino" img={Kana} img2={Plus} />
    </div>
  );
};

export default RightSection;

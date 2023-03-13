import React from "react";
import Dash from "../../components/Dash/index.jsx";
import design from "./style.module.css";
import logo from "../../assets/logo.png";

import {
  Artist,
  FavSong,
  Trends,
  Feed,
  NewN,
  RelCal,
  Home,
  Events,
  Album,
} from "../../assets/icons.js";
// import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className={design.sidebar}>
      <div className={design.side_header}>
        <img src={logo} alt="" />
        <h3 className={design.side_title}>
          <span>Sheila</span>Music
        </h3>
      </div>

      <Dash ico={Home} tags="Home" direct="/home" />
      <Dash ico={Trends} tags="Trends" direct="/trends" />
      <Dash ico={Feed} tags="Feed" />
      <span className={design.spans}>Discover</span>
      <Dash ico={NewN} tags="New and Notable" />
      <Dash ico={RelCal} tags="Release Calendar" />
      <Dash ico={Events} tags="Events" />
      <span className={design.spans}>Your Collection</span>
      <Dash ico={FavSong} tags="Favourite Songs" />
      <Dash ico={Artist} tags="Artist" direct="/artist" />
      <Dash ico={Album} tags="Albums" direct="/albums" />
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import design from "./style.module.css";
import { Chev, Search, Fire, LChev } from "../../assets/icons.js";
import PFCard from "../../components/PF_Card";
import HomePlayer from "../../components/Home_Player";

const MidSection = () => {
  const [search, setSearch] = useState();
  return (
    <div className={design.mainn}>
      <div className={design.section_1}>
        <div className={design.section_1_head}>
          <div className={design.head_ic_cont}>
            <img src={Chev} alt="" className={design.head_icos} />
            <img
              src={Chev}
              alt=""
              className={`${design.head_icos} ${design.right_chev}`}
            />
          </div>

          <div className={design.right_head}>
            <img src={Search} alt="" className={design.search_ico} />
            <input
              type="text"
              className={design.search}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for artists,songs and..."
            />
          </div>
        </div>
        <p className={design.hot}>
          What's hot{" "}
          <span>
            <img src={Fire} alt="" className={design.fire} />
          </span>
        </p>
      </div>
      <div className={design.section_2}>
        <h1>Trending</h1>

        <p>
          More{" "}
          <span>
            {" "}
            <img src={LChev} alt="" />
          </span>
        </p>
      </div>
      <div className={design.section_3}>
        <PFCard />
      </div>
      <div className={design.section_4}>
        <h1>My Playlist</h1>
        <p>Show All</p>
      </div>
      <div className={design.section_5}>
        <table>
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>ARTIST</th>
            <th>TIME</th>
            <th>ALBUM</th>
          </tr>
          <tbody>
            <tr className={design.trows}>
              <td>01</td>
              <td>Priority</td>
              <td>Mos Def</td>
              <td>1:25</td>
              <td>The Ecstatic</td>
            </tr>
            <tr className={design.trows}>
              <td>02</td>
              <td>Time Is Ticking Out</td>
              <td>The Cranberries</td>
              <td>2:59</td>
              <td>Wake Up And Smell The...</td>
            </tr>
            <tr className={design.trows}>
              <td>03</td>
              <td>One Minute More</td>
              <td>Capital Cities</td>
              <td>3:23</td>
              <td>In A Tidal Wave Of M...</td>
            </tr>
            <tr className={design.trows}>
              <td>04</td>
              <td>君之白内物语(Kimi...</td>
              <td>Supercell</td>
              <td>5:50</td>
              <td>Sony Music Records Inc</td>
            </tr>
            <tr className={design.trows}>
              <td>05</td>
              <td>世界 和 恋 に 落ちている</td>
              <td>CHiCO</td>
              <td>5:11</td>
              <td>HineyWorks</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={design.section_6}>
        <HomePlayer />
      </div>
    </div>
  );
};

export default MidSection;

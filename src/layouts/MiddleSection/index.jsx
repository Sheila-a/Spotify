import React, { useState } from "react";
import design from "./style.module.css";
import { Chev, Search, Fire, LChev } from "../../assets/icons.js";
import PFCard from "../../components/PF_Card";

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
        <h2>Trending</h2>

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
            <tr>
              <td>1</td>
              <td>dance</td>
              <td>dance</td>
              <td>1:25</td>
              <td>dance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MidSection;

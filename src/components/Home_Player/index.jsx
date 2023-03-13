import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import { Esc } from "../../assets/music";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillFastForward,
  AiFillFastBackward,
} from "react-icons/ai";
import { BsRepeat, BsArrowsAngleExpand } from "react-icons/bs";
import { CiShuffle, CiVolumeHigh } from "react-icons/ci";
import { IconContext } from "react-icons";
import design from "./style.module.css";

export default function HomePlayer(params) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(Esc);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={design.component}>
      <div className={design.inner}>
        <div>
          <button className={design.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#000" }}>
              <BsArrowsAngleExpand />
            </IconContext.Provider>
          </button>
        </div>
        <div className={design.center}>
          <button className={design.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#000" }}>
              <BsRepeat />
            </IconContext.Provider>
          </button>
          <button className={design.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#000" }}>
              <AiFillFastBackward />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className={design.playButtons} onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className={design.playButtons} onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#000" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className={design.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#000" }}>
              <AiFillFastForward />
            </IconContext.Provider>
          </button>
          <button className={design.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#000" }}>
              <CiShuffle />
            </IconContext.Provider>
          </button>
        </div>
        <div>
          <button className={design.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#000" }}>
              <CiVolumeHigh />
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className={design.time}>
        <p>
          {currTime.min}:{currTime.sec}
        </p>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className={design.timeline}
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
        <p>
          {time.min}:{time.sec}
        </p>
      </div>
    </div>
  );
}

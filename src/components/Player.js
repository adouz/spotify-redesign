import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import {
  faRandom,
  faStepBackward,
  faStepForward,
  faSyncAlt,
  faPause,
  faPlay,
  faVolumeUp,
  faVolumeDown,
  faVolumeOff,
  faVolumeMute,
  faListUl,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div
      style={{
        gridArea: "player",
        width: "100%",
        height: "100px",
        padding: "0 1rem 0 1rem",
        position: "fixed",
        bottom: "0",
        minWidth: "1000px",
      }}
      className="mb-2"
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "1rem",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "10px",
        }}
        className="flex flex-row items-center justify-between"
      >
        <div className="flex flex-row">
          <img
            style={{ width: "60px", borderRadius: "1rem" }}
            src="https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139"
          />
          <div className="mx-5">
            <p className="font-bold">Instant Crush</p>
            <span style={{ color: "#ABABAB" }}>Daft Punk</span>
          </div>
          <div>
            <FontAwesomeIcon style={{ fontSize: "1.2rem" }} icon={faHeart} />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div
            className="flex items-center justify-between mb-2"
            style={{ width: "200px" }}
          >
            {/* https://css-tricks.com/lets-create-a-custom-audio-player/ */}
            <FontAwesomeIcon icon={faRandom} />
            <FontAwesomeIcon icon={faStepBackward} />
            <Button type="player">
              <FontAwesomeIcon icon={faPlay} />
            </Button>
            <FontAwesomeIcon icon={faStepForward} />
            <FontAwesomeIcon icon={faSyncAlt} />
          </div>
          <div className="flex">
            <span className="text-xs">00:00</span>
            <input
              type="range"
              name="timestamp"
              min="0"
              max="100"
              style={{ width: "350px" }}
              className="mx-2"
            />
            <span className="text-xs">04:35</span>
          </div>
        </div>
        <div className="flex justify-between" style={{ width: "185px" }}>
          <FontAwesomeIcon icon={faListUl} />
          <FontAwesomeIcon icon={faDesktop} />
          <FontAwesomeIcon icon={faVolumeUp} />
          <input
            type="range"
            name="volume"
            min="0"
            max="100"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const PlaylistHeader = ({ title, changeScroll }) => {
  return (
    <div className="flex flex-nowrap justify-between my-4">
      <span className="text-lg font-bold">{title}</span>
      <div className="mr-5">
        <span style={{ opacity: "0.5" }}>
          <Button onClick={() => changeScroll(-300)} type="icon-round">
            <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
          </Button>
        </span>
        <Button onClick={() => changeScroll(300)} type="icon-round">
          <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
        </Button>
      </div>
    </div>
  );
};

export default PlaylistHeader;

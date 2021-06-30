import styled from "styled-components";
import Button from "../Button";
import {
  faRandom,
  faStepBackward,
  faStepForward,
  faSyncAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonsWrapper = styled.div`
  width: 200px;
`;

const SeekSlider = styled.input.attrs({
  type: "range",
  name: "timestamp",
  min: "0",
  max: "100",
  className: "mx-2",
})`
  width: 350px;
`;

const Control = () => {
  return (
    <div className="flex flex-col items-center">
      <ButtonsWrapper className="flex items-center justify-between mb-2">
        {/* https://css-tricks.com/lets-create-a-custom-audio-player/ */}
        <FontAwesomeIcon icon={faRandom} />
        <FontAwesomeIcon icon={faStepBackward} />
        <Button type="player">
          <FontAwesomeIcon icon={faPlay} />
        </Button>
        <FontAwesomeIcon icon={faStepForward} />
        <FontAwesomeIcon icon={faSyncAlt} />
      </ButtonsWrapper>
      <div className="flex">
        <span className="text-xs">00:00</span>
        <SeekSlider />
        <span className="text-xs">04:35</span>
      </div>
    </div>
  );
};

export default Control;

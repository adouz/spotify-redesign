import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Wrapper = styled.div`
    width: 185px;
`;

const Volume = styled.input.attrs({
    type: "range",
    name: "volume",
    min: "0",
    max: "100"
})`
    width: 100px;
`;
const Audio = () => {
    return (
        <Wrapper className="flex justify-between">
          <FontAwesomeIcon icon={faListUl} />
          <FontAwesomeIcon icon={faDesktop} />
          <FontAwesomeIcon icon={faVolumeUp} />
          <Volume />
        </Wrapper>       
    );
}

export default Audio;
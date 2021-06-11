import Wrapper from "./Wrapper";
import SecWrapper from "./SecWrapper";
import SongCover from "./SongCover";
import Control from "./Control";
import Audio from "./Audio";

function Player() {
  return (
    <Wrapper
      className="mb-2"
    >
      <SecWrapper
        className="flex flex-row items-center justify-between"
      >
        <SongCover img="https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139" name="Daft Punk" title="Instant Crush" />
        <Control />
        <Audio />
      </SecWrapper>
    </Wrapper>
  );
}

export default Player;

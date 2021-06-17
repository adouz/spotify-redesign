import styled from "styled-components";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const transTime = "0.3s";

const Wrapper = styled.div.attrs({
  className: "grid gap-8 justify-items-center mb-10",
})`
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-auto-flow: column;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const TitleBackground = styled.div`
  position: absolute;
  width: 100%;
  top: 75%;
  height: 35%;
  background: linear-gradient(transparent, #000);
  opacity: 0;
  transition: ${transTime};
`;

const PlaylistTitle = styled.div`
  position: absolute;
  top: 80%;
  left: 0%;
  opacity: 0;
  transition: ${transTime};
`;

const PlaylistCover = styled.div`
  min-width: 17rem;
  position: relative;
  border: 0rem solid;
  background-color: none;
  border-radius: 8%;
  transition: ${transTime};
  overflow: hidden;

  &:hover ${TitleBackground} {
    opacity: 1;
  }

  &:hover .playbutton {
    opacity: 1;
  }

  &:hover ${PlaylistTitle} {
    left: 5%;
    opacity: 1;
  }
`;

const Covers = React.forwardRef(({ playlists }, ref) => {
  return (
    <Wrapper ref={ref}>
      {playlists.map((e, i) => (
        <PlaylistCover key={i}>
          <Button type="play">
            <FontAwesomeIcon
              style={{ fontSize: "1rem" }}
              className="text-xs"
              icon={faPlay}
            />
          </Button>
          <img
            className="rounded-xl img"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={e}
          ></img>
          <TitleBackground />
          <PlaylistTitle>
            <p style={{ fontWeight: "bold", color: "white" }}>
              Title of the playlist
            </p>
            <span style={{ fontSize: ".8rem", color: "rgb(255,255,255,.7)" }}>
              Title of the playlist
            </span>
          </PlaylistTitle>
        </PlaylistCover>
      ))}
    </Wrapper>
  );
})
export default Covers;

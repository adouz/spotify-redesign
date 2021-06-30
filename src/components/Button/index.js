import styled from "styled-components";
import { variant } from "styled-system";

const Button = styled.button(
  variant({
    prop: "type",
    variants: {
      icon: {
        backgroundColor: "transparent",
        border: "none",
        color: "black",
      },
      round: {
        backgroundColor: "white",
        width: "100%",
        padding: "0.5rem",
        borderRadius: "1.5rem",
      },
      "icon-round": {
        color: "black",
        borderRadius: "50%",
        backgroundColor: "white",
        width: "30px",
        height: "30px",
      },
      player: {
        color: "black",
        borderRadius: "50%",
        backgroundColor: "#1ED861",
        width: "45px",
        height: "45px",
      },
      play: {
        position: "absolute",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgb(255,255,255, 0.7)",
        backdropFilter: "blur(4px)",
      },
    },
  })
);

export default (props) => (
  <Button
    {...props}
    className={`button ${props.type === "play" ? "playbutton" : ""}`}
  >
    {props.children}
  </Button>
);

import styled from "styled-components";

function Button(props) {
  const icon = {
    backgroundColor: "transparent",
    border: "none",
    color: "black",
  };
  const round = {
    backgroundColor: "white",
    width: "100%",
    padding: "0.5rem",
    borderRadius: "1.5rem",
  };

  const roundIcon = {
    color: "black",
    borderRadius: "50%",
    backgroundColor: "white",
    width: "30px",
    height: "30px",
  };
  const playerIcon = {
    color: "black",
    borderRadius: "50%",
    backgroundColor: "#1ED861",
    width: "45px",
    height: "45px",
  };
  const play = {
    position: "absolute",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(255,255,255, 0.7)",
    backdropFilter: "blur(4px)",
  };
  let css = {};
  switch (props.type) {
    case "icon":
      css = icon;
      break;
    case "round":
      css = round;
      break;
    case "icon-round":
      css = roundIcon;
      break;
    case "play":
      css = play;
      break;
    case "player":
      css = playerIcon;
      break;
    default:
      css = {};
  }
  return (
    <button
      {...props}
      className={`button ${props.type == "play" ? "playbutton" : ""}`}
      style={css}
    >
      {props.children}
    </button>
  );
}

export default Button;

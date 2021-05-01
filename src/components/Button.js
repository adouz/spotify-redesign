function Button({ type, children }) {
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
  let css = {};
  switch (type) {
    case "icon":
      css = icon;
      break;
    case "round":
      css = round;
      break;
    case "icon-round":
      css = roundIcon;
      break;
    default:
      css = {};
  }
  return <button style={css}>{children}</button>;
}

export default Button;

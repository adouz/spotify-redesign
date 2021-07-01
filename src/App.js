import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(50%, 1fr);
  grid-template-areas:
    "side-bar main"
    "player player";
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sidebar />
        <Main />
        <Player />
      </Wrapper>
    </div>
  );
}

export default App;

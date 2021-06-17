import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto minmax(50%, 1fr)",
          gridTemplateAreas: '"side-bar main" "player player"',
        }}
      >
        <Sidebar />
        <Main />
        <Player />
      </div>
    </div>
  );
}

export default App;

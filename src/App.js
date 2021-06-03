import "./App.css";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Player from "./components/Player.js";

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
        <Home />
        <Player />
      </div>
    </div>
  );
}

export default App;

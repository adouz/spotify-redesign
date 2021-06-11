import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
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
        <Home />
        <Player />
      </div>
    </div>
  );
}

export default App;

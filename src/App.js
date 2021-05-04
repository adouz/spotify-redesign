import "./App.css";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto minmax(50%, 1fr)",
          gridTemplateAreas: '"side-bar main"',
          gap: "1.5rem",
        }}
      >
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;

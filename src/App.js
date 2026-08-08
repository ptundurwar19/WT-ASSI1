import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import WorldClock from "./components/WorldClock";
import Alarm from "./components/Alarm";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import WorldMap from "./components/WorldMap";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      
      <Header />

      <ThemeToggle dark={dark} setDark={setDark} />

      <div className="top-section">
        <AnalogClock />
        <DigitalClock />
      </div>

    <div className="bottom-section">

    <WorldClock />

    <Alarm />

</div>

      {/* <div className="status-card">
        <h2>📊 Dashboard Status</h2>

        <p>
          <strong>Theme :</strong> {dark ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </p>

        <p>
          <strong>Cities :</strong> 5
        </p>

        <p>
          <strong>Alarm :</strong> Ready
        </p>
      </div> */}

        <WorldMap/>
    </div>
  );
}

export default App;
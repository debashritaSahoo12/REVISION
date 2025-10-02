import { useState } from "react";
import "./App.css";

function App() {
  const [speedStatus, setSpeedStatus] = useState(null); 
  const [icon, setIcon] = useState(null); 
  const [loading, setLoading] = useState(false);

  const checkSpeed = async () => {
    setLoading(true);
    setSpeedStatus(null);
    setIcon(null);

    const testUrl = "https://via.placeholder.com/150"; 
    const startTime = performance.now();

    try {
      await fetch(testUrl, { cache: "no-store" });
      const endTime = performance.now();
      const duration = endTime - startTime;

      if (duration < 300) {
        setSpeedStatus("Fast");
        setIcon("🚀");
      } else {
        setSpeedStatus("Slow");
        setIcon("🐢");
      }
    } catch (error) {
      setSpeedStatus("Error");
      setIcon("❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Network Speed Checker</h1>

      <button onClick={checkSpeed} disabled={loading}>
        {loading ? "Checking..." : "Check Speed"}
      </button>

      {speedStatus && (
        <div className="result">
          <span className={speedStatus === "Fast" ? "green" : "red"}>
            {icon}
          </span>
          <p>Speed: {speedStatus}</p>
        </div>
      )}
    </div>
  );
}

export default App;

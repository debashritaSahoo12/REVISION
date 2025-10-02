import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isCharging, setIsCharging] = useState(null);

  useEffect(() => {
    const setupBattery = async () => {
      if ("getBattery" in navigator) {
        const battery = await navigator.getBattery();

        const updateBatteryInfo = () => {
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);
        };

        updateBatteryInfo();

        battery.addEventListener("levelchange", updateBatteryInfo);
        battery.addEventListener("chargingchange", updateBatteryInfo);

        return () => {
          battery.removeEventListener("levelchange", updateBatteryInfo);
          battery.removeEventListener("chargingchange", updateBatteryInfo);
        };
      } else {
        console.warn("Battery API not supported. Using mock data.");
        setBatteryLevel(15); 
      }
    };

    setupBattery();
  }, []);

  const renderIcon = () => {
    if (isCharging) return <span className="green">⚡</span>;
    if (batteryLevel !== null && batteryLevel < 20)
      return <span className="red">🔴</span>;
    return null;
  };

  return (
    <div className="container">
      <h1>Battery Status</h1>

      {batteryLevel !== null ? (
        <div className="status">
          {renderIcon()}
          <p>Battery Level: {batteryLevel}%</p>
          <p>Status: {isCharging ? "Charging" : "Not Charging"}</p>
        </div>
      ) : (
        <p>Loading battery info...</p>
      )}
    </div>
  );
}

export default App;

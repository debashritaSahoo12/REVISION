import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import useFetch from "../CustomHooks/useFetch";
const API_KEY = "1c820f30d26c8f07b1484610873fe88a";
const Weather = () => {
  const [city, setCity] = useState("");
  const [cords, setCords] = useState({ lat: "", lon: "" });
  const url = city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    : cords.lat && cords.lon
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}&units=metric`
    : null;
  const { data, loading, error } = useFetch(url);
  function onSubmit(inputData) {
    setCity(inputData);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && data.name && (
        <div>
          <h2>City: {data.name}</h2>
          <p> Temp: {data.main.temp}°C</p>
          <p>Max Temp: {data.main.temp_max}°C</p>
          <p>Min Temp: {data.main.temp_min}°C</p>
          <p>Wind: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

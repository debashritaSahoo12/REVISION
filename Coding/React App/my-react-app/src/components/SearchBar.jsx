import React, { useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [city, setCity] = useState("");
  function handleSubmit() {
    if (!city.trim()) return;
    onSubmit(city);
    setCity("");
  }
  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};
export default SearchBar;

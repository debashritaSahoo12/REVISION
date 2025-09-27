import useFetch from "./components/useFetch";

const App=() => {
  const city = "London";
  const api ="api_key";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      <h1>Weather in {data.name}</h1>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}
export default App;
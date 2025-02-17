import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Delhi",
    temp: 13.05,
    tempMin: 13.05,
    tempMax: 13.05,
    feelsLike: 12.71,
    weather: "mist",
    humidity: 7.5,
    pressure: 1014,
  });

  let updateInfo = (result) => {
    setWeather(result);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}> Weather APP </h2>
      <SearchBox updateWeatherData={updateInfo}></SearchBox>
      <InfoBox weatherData={weather}></InfoBox>
    </>
  );
}

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import "./SearchBox.css";
export default function SearchBox({ updateWeatherData }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
 
  let APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
  let generateWeatherInfo = async () => {
    try {
      let response = await fetch(APIURL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let result = await generateWeatherInfo();
      updateWeatherData(result);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Send
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists! </p>}
      </form>
    </div>
  );
}

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import "./InfoBox.css";

export default function InfoBox({ weatherData }) {
  let Image_URL =
    "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Rainy_URL =
    "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Winter_URL =
    "https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?q=80&w=2709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Summer_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Autumn_URL =
    "https://plus.unsplash.com/premium_photo-1675791930245-a94ea3edcaea?q=80&w=2638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherData.humidity > 75
                ? Rainy_URL
                : weatherData.temp > 20
                ? Summer_URL
                : weatherData.temp > 10
                ? Autumn_URL
                : Winter_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.city}
              <span style={{ marginLeft: "10px" }}>
                {weatherData.humidity > 75 ? (
                  <ThunderstormIcon />
                ) : weatherData.temp > 20 ? (
                  <WbSunnyIcon />
                ) : weatherData.temp > 10 ? (
                  <CloudIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              className="typography"
            >
              <div>Temperature = {weatherData.temp}</div>
              <div>Humidity = {weatherData.humidity}</div>
              <div>Max Temp = {weatherData.tempMax}</div>
              <div>Min Temp = {weatherData.tempMin}</div>
              <div>
                The weather is described as <b>{weatherData.weather}</b> and it
                feels like {weatherData.feelsLike}&deg; C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

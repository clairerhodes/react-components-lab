

import './WeatherForecasts.css';


const WeatherForecast = (props) => {
  const { weather } = props
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <img src={props.weather.img} alt={weather.imgAlt} />
      <p><span>conditions: </span>current weather conditions</p>
      <p><span>time: </span>time of day</p>
    </div>
  );
};

export default WeatherForecast;
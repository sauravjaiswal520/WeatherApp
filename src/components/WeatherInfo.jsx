import React from "react";

const WeatherInfo = (props) => {
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  const rightSlider = () => {
    var slider = document.getElementById("scrolledItem");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const leftSlider = () => {
    var slider = document.getElementById("scrolledItem");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  return (
    <div className="weatherInfo">
      <div className="currtemp">
        <div className="IconLogo">
          <div>
           
          </div>
          <div>
            {Math.round(props.weatherInfo.temp)}&deg;C
            <p>{props.weather.description}</p>
          </div>
        </div>
        <div className="wind">
          <p>
            {props.language ? "Wind: " : "हवा: "}
            <span>{props.wind.speed}&nbsp;mph</span>
          </p>
          <p>
            {props.language ? "Min Temp: " : "न्यूनतम ताप: "}
            <span>{Math.round(props.weatherInfo.temp_min)}&deg;C</span>
          </p>
          <p>
            {props.language ? "Max Temp: " : "अधिकतम ताप: "}
            <span>{Math.round(props.weatherInfo.temp_max)}&deg;C</span>
          </p>
        </div>
      </div>
      <div id="scrolledItem" className="sunriseData">
        <div>
          <p>{props.language ? "SUNRISE" : "सूर्योदय"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{getTime(props.city.sunrise)}</p>
        </div>
        <div>
          <p>{props.language ? "HUMIDITY" : "नमी"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{props.weatherInfo.humidity}&nbsp;mm</p>
        </div>
        <div>
          <p>{props.language ? "WIND" : "हवा"}</p>
          <img
            src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"}
            width={100}
            alt="icon"
          />
          <p>{props.wind.speed}&nbsp;mph</p>
        </div>
        <div>
          <p>{props.language ? "PRESSURE" : "दबाव"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{props.weatherInfo.pressure}&nbsp;mb</p>
        </div>

        <div>
          <p>{props.language ? "SUNSET" : "सूर्यास्त"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{getTime(props.city.sunset)}</p>
        </div>
      </div>
    
      <p onClick={leftSlider} className="sliderLeft">
        &lt;
      </p>
      <p onClick={rightSlider} className="sliderRight">
        &gt;
      </p>
    </div>
  );
};

export default WeatherInfo;
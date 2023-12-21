import React, { useEffect, useRef, useState } from "react";
import linkIcon from "../assets/abc.svg";
import WeatherInfo from "./WeatherInfo";
import searchIcon from "../assets/find.svg";
const WeatherBox = () => {
  const city = window.localStorage.getItem("city") || "delhi";
  const inputValue = useRef();
  const [wind, setWind] = useState([]);
  const [selectCity, setSelectCity] = useState(city);
  const [cityDetails, setCityDetails] = useState([]);
  const [error, setError] = useState(true);
  const [language, setLanguage] = useState(true);
  const [data, setData] = useState([]);
  
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    (async () => {
      try{ 
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&units=metric&appid=0f2e64d60302d7400e83ac98057fcec7`
        );
        const data = await response.json();
        window.localStorage.setItem("city", selectCity);

        if (response.ok) {
          setWeatherData(data.weather[0]);
          setCityDetails(data?.sys);
          setCityDetails((prev) => ({
            ...prev,
            name: data?.name
          }));
          setWind(data.wind);
          setData(data?.main);
          setError(true);
        } else {
          setError(false);
        }
      } 
      catch(error) {
        setError(false);
      }
      console.log(error, language, selectCity);
    })();
  }, [selectCity, language]);

  const handleOnDownKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSelectCity(inputValue.current.value);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSelectCity(inputValue.current.value);
  };

  return (
    <div className="box">
      <div className="selectCity">
        {error ? (
          <p>
            {cityDetails.name}, {cityDetails.country}
            <a
              href={`https://en.wikipedia.org/wiki/${cityDetails.name}`}
              target="_ "
            >
              <img src={linkIcon} alt="link" />
            </a>
          </p>
        ) : (
          <p className="invalid">
            {language ? "Invalid City Name" : "अमान्य शहर का नाम"}
          </p>
        )}
        <div className="search">
          <input
            type="text"
            ref={inputValue}
            onKeyDown={handleOnDownKey}
            placeholder="City Name"
          />
          <img
            style={{ cursor: "pointer" }}
            onClick={handleOnSubmit}
            src={searchIcon}
            alt="searchIcon"
          />
        </div>
      </div>
      <WeatherInfo
        weatherInfo={data}
        weather={weatherData}
        city={cityDetails}
        language={language}
        wind={wind}
      />
      <button onClick={() => setLanguage(!language)} className="languageConversion">
        {language ? "Hindi" : "Eng"}
      </button>
    </div>
  );
};

export default WeatherBox;
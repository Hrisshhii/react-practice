import { useState } from 'react';
import { BackHome } from '../BackHome';
import './Weather.css';

export function Weather(){
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const searchWeather=async()=>{
    if(!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);
    const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;

    try{
      const geoRes= await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`);
      const geoData=await geoRes.json();
      if(!geoData.length) throw new Error("City Not Found");
      const {lat,lon}=geoData[0];

      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const data=await res.json();

      setWeather(data);
    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className='weather-page'>
      <title>Weather App</title>
      <BackHome />
      <h1 className='weather-title'>Weather App</h1>

      <div className='weather-search'>
          <input 
              type='text'
              placeholder='Enter city'
              value={city}
              onChange={(e)=>setCity(e.target.value)}
          />
          <button onClick={searchWeather}>Search</button>
      </div>
      {loading && <p className='status'>Loading...</p>}
      {error && <p className='error'>{error}</p>}

      {weather &&(
        <div className='weather-card'>
          <h2>{weather.name}</h2>
          <p className='temp'>{Math.round(weather.main.temp)}°C</p>
          <p className='desc'>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};
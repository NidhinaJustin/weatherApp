
import './App.css';
import React, { useEffect, useState } from 'react';
import {initialDataSetValues ,country_name , api_key} from "./constants";
import Weather from './components/Weather';

//wthin the same file

interface dataToSet{
    id:number,
    name:string,
    timezone: number,
    base :number
}

function App() {
  const [weatherData , setWeatherData] =useState<dataToSet>(initialDataSetValues);
  const [cityName , setCityName] =useState<string>("")

  useEffect(()=>{
    fetchWeatherData();
  },[cityName])

 const fetchWeatherData = async()=>{
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`);
    const result= await response.json();
    console.log(result);

    const dataToSet:dataToSet = {
      id:result.id,
      name:result.name,
      timezone: result.timezone,
      base :result.base
    }
    setWeatherData(dataToSet);
  }
  catch(error){
    console.log(error);
  }
 }

 const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setCityName(e.target.value);
 }


  return (
    <div className="App">
      <header className="App-header">
      <label>  <input type='text' name="cityName" value={cityName} onChange={handleInputChange} /> Enter Country Name</label>
      <Weather data={weatherData}/>
      </header>
    </div>
  );
}

export default App;

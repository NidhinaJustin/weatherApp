import React, { useEffect, useState } from 'react'
import dataToSet from './types/weatherAppTypes';
import { initialDataSetValues } from './constants';

interface UseFetchDataProps{
    url:string
}

export default function useFetchData({url}:UseFetchDataProps) {
    const [weatherData , setWeatherData] =useState<dataToSet>(initialDataSetValues);

    useEffect(()=>{
        fetchWeatherData()
    },[])

const fetchWeatherData=async()=>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q&appid=`);
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

  return {weatherData , setWeatherData}
}

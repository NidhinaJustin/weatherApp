import React from "react";
import dataToSet from "../types/weatherAppTypes";

interface WeatherProps {
  data: dataToSet;
}

export default function Weather({ data }: WeatherProps) {
    console.log(Object.keys(data));
   
  return (
    <div className="weather">

      {data.id? (
        <>
          <div>Id : {data.id}</div>
          <div>Timezone : {data.timezone}</div>
          <div>Name: {data.name}</div>
          <div>Base : {data.base}</div>
        </>
      ) : (
        <p>Enter a City Name</p>
      )}
    </div>
  );
}

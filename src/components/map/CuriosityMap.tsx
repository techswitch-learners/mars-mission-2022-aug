import React, {useState} from "react";
import './Map.scss'

export const CuriosityMap: React.FunctionComponent = () => {
  const [date, setDate] = useState('0')

  function handleClick(day:string) {
    setDate(day)
    console.log(date)
  }
  return (
    <main>

      <div className="map">
        <img src="https://mars.nasa.gov/system/resources/deepzooms/24816_MSL_TraverseMap_Sol2695.jpg" 
        alt="Curiosity" 
       />
      </div>
      <div className="button" id="Curiosity-day-1">
        <button onClick={()=>handleClick('1')}>Day 1</button>
      </div>
      
      
    </main>
  );
};

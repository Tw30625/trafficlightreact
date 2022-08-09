import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    
      <div className="trafficLight">
        <div className="cable mx-auto"></div>
        <div className="container light-container mx-auto pt-2">
          <div
            onClick={() => setSelectedColor("red")}
            className={
              " mx-auto light red" +
              (selectedColor === "red" ? "light red redglow" : "light red")
            }
          ></div>
          <div
            onClick={() => setSelectedColor("yellow")}
            className={
              "mx-auto light yellow" +
              (selectedColor === "yellow"
                ? "light yellow yellowglow"
                : "light yellow")
            }
          ></div>
          <div
            onClick={() => setSelectedColor("green")}
            className={
              "mx-auto light green" +
              (selectedColor === "green"
                ? "light green greenglow"
                : "light green")
            }
          ></div>
        </div>
      </div>
   
  );
};

export default Home;

//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=c06f509a42f0f86c0e3d5fe075c1be55

import React from "react";

const Temp = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
          ></input>
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>

      {/* creation of temp card:- */}
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Pune, India</div>
          </div>
        </div>
        <div className="date"> {new Date().toLocaleString()}</div>
        {/* our four 4 column sections in the end */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-sections">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Sunset
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Temp;

import React from "react";
import "./App.css";
import CountUp from "react-countup";

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
  return (
    <>
      <center>
        <h1>Corono Virus Update</h1>
      </center>
      <div class="numbers">
        <div class="confirmed">
          <div class="content">
            <h4>Total Confirmed Cases:</h4>
            <p>
              <CountUp
                start={0}
                end={confirmed}
                duration={2.75}
                separator=","
              />
            </p>
            <span id="date">{new Date(lastUpdate).toDateString()}</span>
          </div>
        </div>
        <div class="recovered">
          <div class="content">
            <div class="content">
              <h4>Total Recovered Cases:</h4>
              <p>
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.75}
                  separator=","
                />
              </p>
              <span id="date">{new Date(lastUpdate).toDateString()}</span>
            </div>
          </div>
        </div>
        <div class="deaths">
          <div class="content">
            <div class="content">
              <h4>Total Deaths Cases:</h4>
              <p>
                <CountUp start={0} end={deaths} duration={2.75} separator="," />
              </p>
              <span id="date">{new Date(lastUpdate).toDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

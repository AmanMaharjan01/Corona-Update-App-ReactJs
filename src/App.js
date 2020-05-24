import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Card";

function App() {
  const [number, setNumber] = useState({
    recovered: null,
    confirmed: null,
    deaths: null,
    lastUpdate: null,
  });

  const [daily, setDaily] = useState("");
  const URL = "https://covid19.mathdro.id/api";

  const getData = async () => {
    try {
      const resAPI = await fetch(URL);
      const resJSON = await resAPI.json();
      setNumber({
        recovered: resJSON.recovered.value,
        confirmed: resJSON.confirmed.value,
        deaths: resJSON.deaths.value,
        lastUpdate: resJSON.lastUpdate,
      });
    } catch (error) {
      console.log("Connection Issue!");
    }
  };

  useEffect(() => {
    getData(number);
  }, [number]);

  const value1 = number.recovered;
  const value2 = number.confirmed;
  const value3 = number.deaths;

  return (
    <div className="App">
      <Cards
        recovered={value1}
        confirmed={value2}
        deaths={value3}
        lastUpdate={number.lastUpdate}
      />
    </div>
  );
}

export default App;



import { useState, useEffect } from "react";
import "../styles/WorldClock.css";

function WorldClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const cities = [
    {
      name: "India",
      flag: "🇮🇳",
      zone: "Asia/Kolkata",
      gmt: "GMT +5:30"
    },
    {
      name: "New York",
      flag: "🇺🇸",
      zone: "America/New_York",
      gmt: "GMT -4"
    },
    {
      name: "London",
      flag: "🇬🇧",
      zone: "Europe/London",
      gmt: "GMT +1"
    },
    {
      name: "Tokyo",
      flag: "🇯🇵",
      zone: "Asia/Tokyo",
      gmt: "GMT +9"
    },
    {
      name: "Sydney",
      flag: "🇦🇺",
      zone: "Australia/Sydney",
      gmt: "GMT +10"
    }
  ];

  return (

    <div className="world-section">

      <h2>🌍 World Clocks</h2>

      <div className="world-grid">

        {cities.map((city, index) => (

          <div className="world-card" key={index}>

            <h3>{city.flag} {city.name}</h3>

            <h1>

              {time.toLocaleTimeString("en-US", {

                timeZone: city.zone

              })}

            </h1>

            <p>{city.gmt}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default WorldClock;
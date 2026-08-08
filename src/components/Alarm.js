import { useState, useEffect } from "react";
import "../styles/Alarm.css";

function Alarm() {

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [alarm, setAlarm] = useState(null);
  const [status, setStatus] = useState("No Alarm Set");

  useEffect(() => {

    const timer = setInterval(() => {

      if (alarm) {

        const now = new Date();

        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        if (
          currentHour === Number(alarm.hour) &&
          currentMinute === Number(alarm.minute)
        ) {

          alert("⏰ Alarm Ringing!");

          setStatus("Alarm Triggered");

          setAlarm(null);

        }

      }

    }, 1000);

    return () => clearInterval(timer);

  }, [alarm]);

  const setNewAlarm = () => {

    if (hour === "" || minute === "") {

      alert("Please select Hour and Minute");

      return;

    }

    setAlarm({

      hour,

      minute

    });

    setStatus(`Alarm Set for ${hour}:${minute}`);

  };

  const clearAlarm = () => {

    setAlarm(null);

    setStatus("No Alarm Set");

  };

  return (

    <div className="card">

      <h2>⏰ Alarm</h2>

      <div className="alarm-container">

        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        >

          <option value="">Hour</option>

          {[...Array(24).keys()].map((h) => (

            <option key={h} value={h}>

              {String(h).padStart(2, "0")}

            </option>

          ))}

        </select>

        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        >

          <option value="">Minute</option>

          {[...Array(60).keys()].map((m) => (

            <option key={m} value={m}>

              {String(m).padStart(2, "0")}

            </option>

          ))}

        </select>

        <button onClick={setNewAlarm}>
          Set Alarm
        </button>

        <button
          className="clear-btn"
          onClick={clearAlarm}
        >
          Clear Alarm
        </button>

        <p className="alarm-status">

          {status}

        </p>

      </div>

    </div>

  );

}

export default Alarm;
import { useState, useEffect } from "react";
import "../styles/AnalogClock.css";

function AnalogClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const second = time.getSeconds() * 6;

    const minute = time.getMinutes() * 6 + time.getSeconds() * 0.1;

    const hour =
        (time.getHours() % 12) * 30 +
        time.getMinutes() * 0.5;

    return (

        <div className="card">

            <h2>🕒 Analog Clock</h2>

            <div className="clock">

                <div
                    className="hand hour"
                    style={{ transform: `translateX(-50%) rotate(${hour}deg)` }}
                ></div>

                <div
                    className="hand minute"
                    style={{ transform: `translateX(-50%) rotate(${minute}deg)` }}
                ></div>

                <div
                    className="hand second"
                    style={{ transform: `translateX(-50%) rotate(${second}deg)` }}
                ></div>

                <div className="center"></div>

                <span className="n12">12</span>
                <span className="n3">3</span>
                <span className="n6">6</span>
                <span className="n9">9</span>

            </div>

        </div>

    );

}

export default AnalogClock;
import { useState, useEffect } from "react";
import "../styles/DigitalClock.css";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="card">

            <h2>digital Clock</h2>

            <div className="digital-time">

                {time.toLocaleTimeString()}

            </div>

            <div className="digital-date">

                {time.toLocaleDateString("en-IN",{
                    weekday:"long",
                    day:"numeric",
                    month:"long",
                    year:"numeric"
                })}

            </div>

            <div className="timezone">

                Asia/Kolkata (IST)

            </div>

        </div>

    );

}

export default DigitalClock;
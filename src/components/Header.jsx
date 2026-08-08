import { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <header className="header">

            <h1>🌍 World Clock Dashboard</h1>

            <p className="subtitle">
                Real-Time Multi-Timezone Monitoring System
            </p>

            <div className="date-time">

                <p>{time.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}</p>

                <h2>{time.toLocaleTimeString()}</h2>

            </div>

        </header>

    );

}

export default Header;
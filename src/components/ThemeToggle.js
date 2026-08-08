import "../styles/ThemeToggle.css";

function ThemeToggle({ dark, setDark }) {

    return (

        <div className="theme-toggle">

            <span>Light</span>

            <label className="switch">

                <input
                    type="checkbox"
                    checked={dark}
                    onChange={() => setDark(!dark)}
                />

                <span className="slider"></span>

            </label>

            <span>Dark</span>

        </div>

    );

}

export default ThemeToggle;
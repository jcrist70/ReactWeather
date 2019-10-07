const React = require('react');

const About = () => {
    return (
        <div>
            <h3 className="text-center">About</h3>
            <p>This is a weather app build on React using Web API's.</p>
            <p>Some related links:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">JS React Framework</a>
                </li>
                <li>
                    <a href="https://openweathermap.org">Weathermap API for weather data</a>
                </li>
                <li>
                    <a href="https://foundation.zurb.com">Zurb Foundation for styling</a>
                </li>
                <li>
                    <a href="https://www.zipcodeapi.com/">City to zipcode API</a>
                </li>
            </ul>
        </div>
    );
}

module.exports = About;
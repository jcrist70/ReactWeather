var React = require('react');


const WeatherMessage = ({ cityName, stateName, temp }) => {
  // pass the cityName in from parent using <WeatherMessage cityName={cityName}/>
    return (
      <div>
        <h1 className="text-center">The Temperature in {cityName}, {stateName} is {temp}!</h1>
      </div>
    );
}

module.exports = WeatherMessage;
const React = require('react');
const WeatherForm = require('./weather-form.component');
const WeatherMessage = require('./weather-message.component');
const openWeatherMap = require('../api/openWeatherMap.api');

const Weather = React.createClass({
    getDefaultProps: function () {
        return {
            isLoading: false
        };
      },
      getInitialState: function () {
        return {
            cityName: this.props.cityName,
            stateName: this.props.stateName,
            temp: this.props.temp
            //message: this.props.message
        };
      },
      handleNewData: function (updates) {
        this.setState({
            isLoading: true
        })

        console.log('From handleNewData: ', updates.cityName, '   ', updates.stateName);
        openWeatherMap.getTemp(updates.cityName, updates.stateName).then(temp => {
            this.setState({
                cityName: updates.cityName,
                stateName: updates.stateName,
                temp: temp
            });
        }, function (error) {
            alert(error);
        });
        this.setState({
            isLoading: false
        })
        //this.setState(updates);
        //alert(updates.cityName);
      },
      
    render: function () {
        var { isLoading, cityName, stateName, temp } = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Looking up the weather...</h3>;
            } else if (temp && cityName) {
                return <WeatherMessage cityName={cityName} stateName={stateName} temp={temp}/>;
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onNewData={this.handleNewData}/>
                { renderMessage() }
            </div>
        );
    }
});

module.exports = Weather;
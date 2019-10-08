const React = require('react');
const WeatherForm = require('./weather-form.component');
const WeatherMessage = require('./weather-message.component');
const openWeatherMap = require('../api/openWeatherMap.api');
const ErrorModal = require('./error-modal.component');

const Weather = React.createClass({
    getDefaultProps: function () {
        return {
            isLoading: false,
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
            isLoading: true,
            errorMessage: undefined
        });

        console.log('From handleNewData: ', updates.cityName, '   ', updates.stateName);
        openWeatherMap.getTemp(updates.cityName, updates.stateName).then(temp => {
            this.setState({
                cityName: updates.cityName,
                stateName: updates.stateName,
                temp: temp
            });
        }, (e) => {
            //alert(e);
            this.setState({
                //errorMessage: e.message
                errorMessage: 'Unable to fetch weather for that location.'
            })
        });
        this.setState({
            isLoading: false,
            cityName: undefined, 
            stateName: undefined, 
            temp: undefined, 
            errorMessage: undefined
        })
        //this.setState(updates);
        //alert(updates.cityName);
      },
      componentDidMount: function () {
        var updates = {};
        var city = this.props.location.query.location;
        var state = this.props.location.query.state;
        updates = {
            cityName: city,
            stateName: state
        };
        console.log('componentDidMount, cityName: ',updates.cityName, '  stateName: ', updates.stateName);
        if (city && city.length > 0) {
            if (state && state.length > 0) {
                this.handleNewData(updates);
                window.location.hash = '#/';
            } else {
                alert('Something went wrong, update your values and try again.')
            }   
        }
      },
      componentWillReceiveProps: function (newProps) {
        var updates = {};
        var city = newProps.location.query.location;
        var state = newProps.location.query.state;
        updates = {
            cityName: city,
            stateName: state
        };
        console.log('componentDidMount, cityName: ',updates.cityName, '  stateName: ', updates.stateName);
        if (city && city.length > 0) {
            if (state && state.length > 0) {
                this.handleNewData(updates);
                window.location.hash = '#/';
            } else {
                alert('Something went wrong, update your values and try again.')
            }   
        }
      },
    render: function () {
        var { isLoading, cityName, stateName, temp, errorMessage } = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Looking up the weather...</h3>;
            } else if (temp && cityName) {
                return <WeatherMessage cityName={cityName} stateName={stateName} temp={temp}/>;
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} title=""/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Weather Component</h1>
                <WeatherForm onNewData={this.handleNewData}/>
                { renderMessage() }
                { renderError() }
            </div>
        );
    }
});

module.exports = Weather;
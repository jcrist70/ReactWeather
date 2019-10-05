var React = require('react');


var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();
  
      var updates = {};
      var cityName = this.refs.cityName.value;
      var stateName = this.refs.stateName.value;
      
      if (cityName.length > 0) {
        this.refs.cityName.value = '';
        console.log(cityName);
        updates.cityName = cityName;
      }
      if (stateName.length > 0) {
        //this.refs.stateName.value = '';
        console.log(stateName);
        updates.stateName = stateName;
      }

      this.props.onNewData(updates);
    },
    render: function () {
      return (
        <form onSubmit={this.onFormSubmit}>
          <div>
            <textarea ref="cityName" placeholder="enter city name"></textarea>
            <textarea ref="stateName" placeholder="enter state name"></textarea>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      );
    }
  });

  module.exports = WeatherForm;
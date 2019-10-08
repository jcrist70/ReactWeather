const React = require('react');
const { Link, IndexLink } = require('react-router');


const Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var encodedCity = encodeURIComponent(this.refs.city.value);
        var encodedState = encodeURIComponent(this.refs.state.value);
        
        if (encodedCity.length > 0 && encodedState.length > 0) {
            //this.refs.city.value = "";
            window.location.hash = '#/?location=' + encodedCity + '&state=' + encodedState;
            //window.location.hash = '/?location=Lake Oswego&state=OR';
        }
        //alert('city: ' + city + '  state: ' + state);
    },
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input ref="city" type="search" placeholder="City"/>
                            </li>
                            <li>
                                <input ref="state" type="search" placeholder="State"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

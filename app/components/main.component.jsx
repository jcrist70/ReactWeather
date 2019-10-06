
const React = require('react');
const Nav = require('./nav.component');

const Main = (props) => {
    // can only return one root element inside of React
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;

const React = require('react');
const Nav = require('./nav.component');

const Main = (props) => {
    // can only return one root element inside of React
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;
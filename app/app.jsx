// npm install babel-preset-stage-0
// npm install react-router@2.0.0 --save
// npm install axios --save

// git --version
// git init
// git status

// webpack -w
// node server.js
// early dev: to get to about page --> http://127.0.0.1:3001/#/about

const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const Main = require('./components/main.component');
const Weather = require('./components/weather.component');
const About = require('./components/about.component');
const Examples = require('./components/examples.component');

ReactDOM.render(
  // the history term forces the usee of /url/#/... 
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="examples" component={Examples}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

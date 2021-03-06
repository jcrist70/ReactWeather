// npm install babel-preset-stage-0
// npm install react-router@2.0.0 --save
// npm install axios --save
// npm install css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0 --save-exact --save-dev
// npm install sass-loader@3.2.1 node-sass@3.4.2 --save-dev

// git --version
// git init
// git status
// git add .gitignore
// git add .
// git commit -m 'Init Commit'
// git commit -a -m 'Adding modified files to the Init Commit'  // have to use 'git add .' if it is a new file!
// ls -al ~/.ssh
// git remote add origin https://github.com/jcrist70/ReactWeather.git
// git branch
// git remote -v
// git commit -a -m 'Adding modified files to the Init Commit'  // have to use 'git add .' if it is a new file!
// git push -u origin master
// OR
// git push

// heroku login
// heroku auth:whoami
// heroku create
// git push heroku master
// heroku open

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

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
// app.styles.css
require('style!css!sass!applicationStyles');
//require('./app/styles/app.styles.css');

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

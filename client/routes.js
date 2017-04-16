"use strict";

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;
const routesConfig = require('./routesConfig');
const AsyncProps = require('async-propos').default;

class Routes extends React.Component {
  render() {
    return <Router history={hashHistory} routes={routesConfig} render={ (props) => <AsyncProps {...props}/> } />;
  }
}

module.exports = Routes;
const React = require('react');
const AsyncProps = require('async-props').default;
module.exports = (renderProps,asyncProps) => <AsyncProps {...renderProps} {...asyncProps} />;
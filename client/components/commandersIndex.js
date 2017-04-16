"use strict";

const React = require('react');
const Link = require('react-router').Link;
const serviceCommander = require('../commanderService');


class CommandersIndex extends React.Component {

static loadProps(context,callback){
  serviceCommander('commander')
  .then(response=>{
    const commanders = response;
    console.log('commanders: ',response);
    callback(null,{commanders})
  })
  .catch(error=>callback(error));
 
}

  render() {
    return (
      <div center>
        <h1>The famous commanders</h1>
        <ul>{
          
          this.props.commanders.map(item =>
            <li key={item.id}><Link to={`/commander/${item.id}`}>{item.name}</Link></li>
          )
        }</ul>
      </div>
    )
  }
}

module.exports = CommandersIndex;

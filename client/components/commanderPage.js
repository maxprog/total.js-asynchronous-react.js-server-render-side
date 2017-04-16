"use strict";

const React = require('react');
const Link = require('react-router').Link;
const serviceCommander = require('../commanderService');

class CommanderPage extends React.Component {

  static loadProps(context,callback){
  serviceCommander('commander/'+context.params.id)
  .then(response=>{
    const commander = response;
     console.log('commander: ',response);
    callback(null,{commander})
  })
  .catch(error=>callback(error));
 
}


  render() {
   
    return (
      <div>
        <h2>{this.props.commander.name}'s major battles</h2>
        <ul className="battles">{
          this.props.commander.battles.map( (battle, key) =>
              <li key={key} className="battle">{battle}</li>
          )
        }</ul>
        <Link to="/">Go back to index</Link>
      </div>
    );
  }
}

module.exports = CommanderPage;

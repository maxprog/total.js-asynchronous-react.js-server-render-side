var _ = require('lodash');
exports.install = function() {

	F.cors('/api/*', ['get', 'post', 'put', 'delete'], true); 
  
    //Not protected 
    F.route('/api/commander', getCommanderList);
    F.route('/api/commander/{id}', getCommander);

    //Let's add logging for each request so we know what's going on:
    F.on('request', function(req, res) {
        console.log(`[${req.method}] ${req.url}`);
    });

    F.route('#401', custom); // Unauthorized

};

function getCommanderList() {
    let self = this;
    self.json(commanders);
}



function getCommander(id) {
    let self = this;
    let item =  _.find(commanders,{id:id});
    
        self.json(item);
}

function custom() {
    var self = this;
    self.json({ 'error': '401', 'message':'Unauthorized' });
}


const  commanders = [
{
      'id': 'g-j-c',
    'name': 'Gaius Iulius Caesar',
    'battles': [
      'Battle of Alesia',
      'Battle of Alesia',
      'Battle of Gergovia',
      'Battle of the Nile'

    ]
  },
{
      'id': 'n-b',
    'name': 'Napoleon Bonaparte',
    'battles': [
      'Marengo',
      'Austerlitz',
      'Jena',
      'Smolensk',
        'Lipsk',
        'Borodino',
        'Waterloo'
    ]
}
  ];



/*
function addTodo() {
    var self = this;
    var todo = self.body;
     console.log(todo);
    todo.id=UID();
    todoList.push(todo);
  //  console.log(todoList);
     self.json({ 'operation': 'updateTodo', 'result': 'OK', data:todo });
}

function updateTodo(todo) {
    var self = this;
     var todo = self.body;
   //  console.log(todo);
      var match = _.find(todoList, {id:todo.id});
   
    if(match){
        var index = _.indexOf(todoList, _.find(todoList, {id:todo.id}));
        todoList.splice(index, 1, todo);
    } 
 console.log(todoList);
    self.json({ 'operation': 'updateTodo', 'result': 'OK',data:todo });
}

function deleteTodo(id) {
    var self = this;
  //   console.log('delete id=',id); 
     var match = _.find(todoList, {id:id});
 //    console.log('match=',match); 
    if(match){
        var index = _.indexOf(todoList, _.find(todoList, {id:id}));
 //       console.log('index=',index); 
        todoList.splice(index, 1);
        
    } 
 //  console.log(todoList); 
    self.json({ 'operation': 'deleteTodo', 'result': 'OK' });
}
*/


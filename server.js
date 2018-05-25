var connect = require ( 'connect');
var random_insult = require( './random_insult' );
var app = connect();

var helloWorld = function( req, res, next ){
  res.setHeader( 'Content-Type', 'text-plain');

  res.end( 'Hello World');
};

var insultMe = function (req, res, next ){
  res.setHeader( 'Content-Type', 'text-plain');

random_insult.get_insult( function (insult){
res.end( insult );

  });
};

app.use( '/hello', helloWorld);
app.use( '/app_me', insultMe );

app.listen( 3000);

console.log( 'Server running at http://localhost:3000' );

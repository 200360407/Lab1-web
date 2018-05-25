var connect = require ( 'connect');
var app = connect();

var helloWorld = function( req, res, next ){
  res.setHeader( 'Content-Type', 'text-plain');

  res.end( 'Hello World');
};



app.use( '/hello', helloWorld);

app.listen( process.env.PORT || 3001 );

console.log( 'Server running at http://localhost:3001' );

const fs = require( 'fs' );
const express = require( 'express' );
const bodyparser = require( 'body-parser' );
const exphbrs = require( 'express-handlebars' );
/*const mysql = require( 'mysql ');*/

/*const cssFolder = fs.readdirSync( './public/css ' );
const jsFolder = fs.readdirSync( './public/js' );
const resFolder = fs.readdirSync( './public/images' ); */

const portOptions = {
    hostname : 'localhost',
    port : process.env.PORT || 3000
};

var app = express();

app.use ( bodyparser.json ( {'limit' : '10mb'} ) );

app.engine ( 'handlebars', exphbrs  ( { defaultLayout : 'main' } ) );

app.set ( 'view engine', 'handlebars');

app.get ( '*' , function(req,res) {

  /* Stuff For Event Listeners Go Here */
 console.log('Server Is On');

});

app.listen ( portOptions, function(err) {
    if (err){
        throw err;
    } else{
        console.log('==Listening on Port:' + portOptions.port);
    }
});

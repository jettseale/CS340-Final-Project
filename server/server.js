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

app.use('/public', express.static('public'));

app.engine ( 'handlebars', exphbrs ({defaultLayout: 'main'}) );

app.set ( 'view engine', 'handlebars');

app.get ('*', function(req,res){


if (req.url == '/home-page.handlebars' || req.url =='/') {
    res.status(200).render('home-page');
    console.log('== Loaded Page' + req.url);
  }
  else if (req.url == '/dieseases.handlebars') {
    res.status(200).render('diseases');
    console.log('== Loaded Page' + req.url);
  }

  else if (req.url == '/staff.handlebars') {
    res.status(200).render('staff');
    console.log('== Loaded Page' + req.url);
  }

  else if (req.url == '/patients.handlebars') {
    res.status(200).render('patients');
    console.log('== Loaded Page' + req.url);
  }

  else {
    res.status(404).render('404');
  }

console.log( req.url );

});

app.listen ( portOptions, function(err) {
    if (err){
        throw err;
    } else{
        console.log('==Listening on Port:' + portOptions.port);
    }
});

const fs = require( 'fs' );
const express = require( 'express' );
const bodyparser = require( 'body-parser' );
const exphbrs = require( 'express-handlebars' );
const mysql = require( 'mysql');
const config = require('./config');

const portOptions = {
	hostname: 'localhost',
	port: process.env.port || 3333
};

var app = express();

app.use(bodyparser.json({'limit' : '10mb'}));

app.use('/public', express.static('public'));

app.engine('handlebars', exphbrs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

var conn = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database:  config.dbname
});

conn.connect (function(error) {
	if (error) {
		console.log('Error');
	} else {
		console.log('Connected');
	}
});

app.get( '*', function(req, res) {

	if 	(req.url == '/home-page.handlebars' || req.url == '/') {
		conn.query("SELECT B.img, B.bID, B.Address, B.Used_Rooms, B.Unused_Rooms, B.Total_Rooms, COUNT(S.sID) AS staffs, COUNT(P.pID) As patient FROM Building_Info B, Staff S, Patients P WHERE B.bID = P.pID And B.bID = S.Staff_bID GROUP BY B.bID",
		function(error, rows, fields) {
			if (error) return next(error);
				res.render('home-page', {rows});
		});
}

	else if (req.url == '/diseases.handlebars') {
		conn.query("SELECT * FROM Disease", function(error, rows, fields) {
			if (error) return next(error);
				res.render('diseases', {rows});
		});
	}
	else if (req.url == '/staff.handlebars') {
		conn.query("SELECT * FROM Staff", function(error, rows, fields) {
			if (error) return next(error);
				res.render('staff', {rows});
		});
	}
	else if (req.url == '/patients.handlebars') {
		conn.query("SELECT * FROM Patients", function(error, rows, fields) {
			if (error) return next(error);
				res.render('patients', {rows});
		});
	}
	else {
		res.status(404).render('404');
	}

	console.log(req.url);

});

app.listen (portOptions, function(err) {
	if (err) {
		throw err;
		console.log("Server error");
	} else {
		console.log("Listening on port " + portOptions.port);
	}
});

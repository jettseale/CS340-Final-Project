const fs = require( 'fs' );
const express = require( 'express' );
const bodyparser = require( 'body-parser' );
const exphbrs = require( 'express-handlebars' );
const mysql = require( 'mysql');
const config = require('./config');

const portOptions = {
	hostname: 'localhost',
	port: process.env.port || 3330
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

	if 	(req.url == '/home-page' || req.url == '/') {
		conn.query("SELECT Building_Info.img, Building_Info.bID, Building_Info.Address, Building_Info.Used_Rooms, Building_Info.Unused_Rooms, Building_Info.Total_Rooms, COUNT(Staff.sID) AS staffs, COUNT(Patients.pID) AS patient FROM Building_Info LEFT JOIN Staff on Building_Info.bID = Staff.Staff_bID LEFT JOIN Patients on Building_Info.bID = Patients.Patients_bID GROUP BY Building_Info.bID",
		function(error, rows, fields) {
			if (error) return next(error);
				res.render('home-page', {rows});
		});
}

	else if (req.url == '/diseases') {
		conn.query("SELECT D.dID, D.dName, T.tID, T.tName FROM Disease D, Treatment T, Has H WHERE D.dID = H.Has_dID And H.Has_tID = T.tID GROUP BY D.dID", function(error, rows, fields) {
			if (error) return next(error);
				res.render('diseases', {rows});
		});
	}
	else if (req.url == '/staff') {
		conn.query("SELECT Staff.sID, Staff.sName,  Staff.Staff_bID, Staff.Employee_Type, COUNT(Patients.pID) AS numpatients FROM Staff LEFT JOIN Cares_For ON Staff.sID = Cares_For.Cares_sID LEFT JOIN Patients ON Patients.pID = Cares_For.Cares_pID GROUP BY Staff.SID", function(error, rows, fields) {
			if (error) return next(error);
				res.render('staff', {rows});
		});
	}
	else if (req.url == '/patients') {
		conn.query("SELECT P.pName, P.pID, P.Age, P.Room_Num, P.Patients_bID, S.sID, S.sName FROM Staff S, Cares_For C, Patients P WHERE P.pID = C.Cares_pID AND C.Cares_sID = S.sID", function(error, rows, fields) {
			if (error) return next(error);
				res.render('patients', {rows});
		});
	}
	else {
		res.status(404).render('404');
	}

	console.log(req.url);

});

app.post('/addLocation', function(req, res) {
	console.log(req.body);
	console.log(req.body.Address);

	var search = 'SELECT bID FROM Building_Info WHERE bID = ?';
	conn.query(search, req.body.bID, function (error, rows, fields) {
		if (rows.length) {
			res.status(500).send("Error adding location: a location with that ID already exists.");
		} else {
			var sql = 'INSERT INTO Building_Info (Address, bID, img, Total_Rooms, Unused_Rooms, Used_Rooms) VALUES (?, ?, ?, ?, ?, ?)';
			conn.query(sql, [req.body.Address, req.body.bID, req.body.img, req.body.Total_Rooms, req.body.Unused_Rooms, req.body.Used_Rooms], 			 function () {
				res.status(200).send("Success");
			});
		}
	});
});

app.listen (portOptions, function(err) {
	if (err) {
		throw err;
		console.log("Server error");
	} else {
		console.log("Listening on port " + portOptions.port);
	}
});

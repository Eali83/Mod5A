var unirest = require("unirest");

var req = unirest("GET", "https://flight-data4.p.rapidapi.com/get_airline_flights");

req.query({
	"airline": "SIA"
});

req.headers({
	"x-rapidapi-key": "d09b900a59msh80519712129c67cp1b0604jsncd1799b8c2bf",
	"x-rapidapi-host": "flight-data4.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
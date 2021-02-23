var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract");

req.query({
	"url": "http://www.melskitchencafe.com/the-best-fudgy-brownies/"
});

req.headers({
	"x-rapidapi-key": "d09b900a59msh80519712129c67cp1b0604jsncd1799b8c2bf",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
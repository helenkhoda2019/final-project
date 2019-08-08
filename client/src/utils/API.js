// import axios from "axios";


//  const BASEURL = "https://rapidapi.com/apidojo/api/hm-hennes-mauritz?endpoint=5c3379cae4b09c6b17cfd6a5";
// const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";
// //https://api.giphy.com/v1/gifs/search?q=kittens&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20
// export default {
//     search: function(query){
//         return axios.get(BASEURL + query + APIKEY)
//     }
// };
// // https://api.giphy.com/v1/gifs/search?q=

var unirest = require("unirest");

var req = unirest("GET", "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list");

req.query({
	"categories": "men_all",
	"sortBy": "stock",
	"concepts": "H&M MAN",
	"country": "us",
	"lang": "en",
	"currentpage": "0",
	"pagesize": "30"
});

req.headers({
	"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});


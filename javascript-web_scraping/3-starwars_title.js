#!/usr/bin/node

const request = require('request');
const episodeNumber = process.argv[2];
const urlToRequest = `https://swapi-api.hbtn.io/api/films/${episodeNumber}`;

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  data = JSON.parse(body);
  console.log(data.title);
});

#!/usr/bin/node

const request = require('request');
const urlToRequest = process.argv[2];

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  const data = JSON.parse(body);
  const movies = data.results;
  let counter = 0;
  movies.forEach(movie => {
    movie.characters.forEach(char => {
      if (char.includes('18')) {
        counter += 1;
      }
    });
  });
  console.log(counter);
});

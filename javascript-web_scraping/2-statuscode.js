#!/usr/bin/node

const request = require('request');
const urlToRequest = process.argv[2];

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  console.log('code:', response.statusCode);
});

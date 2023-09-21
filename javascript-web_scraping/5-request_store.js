#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const urlToRequest = process.argv[2];
const filePath = process.argv[3];

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  fs.appendFile(filePath, body, 'utf-8', function (err) {
    if (err) {
      console.error(err);
    }
  });
});

#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

fs.appendFile(filePath, stringToWrite, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  }
});

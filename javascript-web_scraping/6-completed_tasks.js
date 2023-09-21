#!/usr/bin/node

const request = require('request');
const urlToRequest = process.argv[2];

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  const data = JSON.parse(body);
  tasksCompleted = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0,
   '6': 0, '7': 0, '8': 0, '9': 0, '10': 0};
  data.forEach(task => {
    if (task.completed === true ){
      tasksCompleted[task.userId] += 1;
    }
  });
  console.log(tasksCompleted);
});

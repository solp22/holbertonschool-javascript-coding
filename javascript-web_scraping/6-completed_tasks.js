#!/usr/bin/node

const request = require('request');
const urlToRequest = process.argv[2];

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  const data = JSON.parse(body);
  tasksCompleted = {};
  data.forEach(task => {
    if (!tasksCompleted[task.userId]) {
      tasksCompleted[task.userId] = 0;
    }
    if (task.completed === true ){
      tasksCompleted[task.userId] += 1;
    }
  });
  console.log(tasksCompleted);
});

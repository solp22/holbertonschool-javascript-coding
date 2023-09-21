#!/usr/bin/node

const request = require('request');
const urlToRequest = process.argv[2];

request(urlToRequest, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  const data = JSON.parse(body);
  const tasksCompleted = {};
  data.forEach(task => {
    if (task.completed === true) {
      if (!tasksCompleted[task.userId]) {
        tasksCompleted[task.userId] = 0;
      }
      tasksCompleted[task.userId] += 1;
    }
  });
  console.log(tasksCompleted);
});

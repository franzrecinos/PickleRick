'use strict'

//module used to make http request
var request = require('request');

// var getJobs = function getJobs(cb){
//   var url = 'https://api3.crowdstaffing.com/jobs.json?page=1&per_page=10';
//   request(url, function (error, response, body) {
//     cb(error,response,body); // callback function
//   });

var getJobs = function getJobs(cb){

  var url = 'https://api3.crowdstaffing.com/jobs.json?page=1&per_page=10';
  request(url, function (error, response, body) {
    cb(error,response,body); // callback function
  });

}

var serviceObject = {
  "getJobs":getJobs,
}

module.exports = serviceObject

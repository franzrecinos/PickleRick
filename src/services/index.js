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

// var sortJobsBySalary = fucntion(jobs){
//   var sortedObj = {},
//         keys = Object.keys(jobs);

//     keys.sort(function(key1, key2){
//         key1 = key1.toLowerCase(), key2 = key2.toLowerCase();
//         if(key1 < key2) return -1;
//         if(key1 > key2) return 1;
//         return 0;
//     });

//     for(var index in keys){
//         var key = keys[index];
//         if(typeof object[key] == 'object' && !(object[key] instanceof Array)){
//             sortedObj[key] = sortObject(object[key]);
//         } else {
//             sortedObj[key] = object[key];
//         }
//     }

//     return sortedObj;
// }

var serviceObject = {
  "getJobs":getJobs,
}

module.exports = serviceObject

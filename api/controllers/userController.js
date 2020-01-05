'use strict';

const request = require('request');
let result;

exports.list_users = function(req, res) {
   request({
     url: 'https://api.github.com/users?since='+req.query.since,
     headers: {
        'User-Agent': '',
        'Authorization': 'Bearer cda6be96a2308e926f9b5057845dce8145c0ef4d'
     }
   }, function(error, response) {
       if(error) {
        console.error(err);
      } else {
        result = response.body;
        res.send(result);
      }
   });
}

exports.user_details = function(req, res) {
   request({
     url: 'https://api.github.com/users/'+req.params.username,
     headers: {
        'User-Agent': '',
        'Authorization': 'Bearer cda6be96a2308e926f9b5057845dce8145c0ef4d'
     }
   }, function(error, response) {
       if(error) {
        console.error(err);
      } else {
        result = response.body;
        res.send(result);
      }
   });
}

exports.user_repos = function(req, res) {
   request({
     url: 'https://api.github.com/users/'+req.params.username+'/repos',
     headers: {
        'User-Agent': '',
        'Authorization': 'Bearer cda6be96a2308e926f9b5057845dce8145c0ef4d'
     }
   }, function(error, response) {
       if(error) {
        console.error(err);
      } else {
        result = response.body;
        res.send(result);
      }
   });
}

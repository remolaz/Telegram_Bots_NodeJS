
var request = require('request');

request({url: 'http://yourapi.com/', json: true}, function(err, res, json) {
  if (err) {
    throw err;
  }
  console.log(json);
});

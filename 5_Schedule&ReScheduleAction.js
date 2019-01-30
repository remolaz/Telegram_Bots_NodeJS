
var randomInt = require('random-int');
let date = require('date-and-time');
var scheduler = require('node-schedule');


var data = new Date;
  data = date.addMinutes(data,1);
  console.log('Data prima dello scheduler: ' + date.format(data,'HH:mm') );

// var j = scheduler.scheduleJob('1 30 7 * * *', function(){ // Every time at 07:30
// var j = schedule.scheduleJob('1 * * * * *', function(){ // Every Minute
var j = scheduler.scheduleJob(data, function(){

  console.log('This job ran at ' + date.format(new Date(),'HH:mm') );
  
  data = date.addMinutes(data, randomInt(1, 5));
  console.log('Data aggirnata nello scheduler: ' + date.format(data,'HH:mm') );

  j.reschedule(data);

});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
// = require underscore
//= require jquery.turbolinks
//= require turbolinks
//= require moment
//= require fullcalendar
// = require gmaps/google
//= require_tree .
$(document).ready(function(){
  $('#calendar').fullCalendar({
    // disableDragging: true,
    editable: true,
    showNonCurrentDates: true,
  //   dayClick: function(date, allDay, jsEvent, view) {
      
  //       $('#calendar').fullCalendar('addEventSource', [{
  //         　id:date,
  //           title: '予約可能日',
  //           start: date,
  //           allDay: allDay,
  //       }]);
       
      
      
  // },
  // // イベントをクリックしたらタイトルをhogeに変える
  // eventClick: function(calEvent, jsEvent, view) {
  //     calEvent.title = 'hoge';
  //     $('#calendar').fullCalendar('updateEvent', calEvent);
  // }
  });
});



function alarmTime(time) {
  this.time = time;
}


function displayTime() {
    var time = moment().format('h:mm:ss A');
    $('#time').html(time);
    setTimeout(displayTime, 1000);
}



$(document).ready(function() {
  displayTime();
  $("#alarming").submit(function(event){
    event.preventDefault();
    var setTime = $("#finalAlarm").val();
    console.log(setTime);
  });
});

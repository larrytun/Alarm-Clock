

function displayTime() {
    var time = moment().format('h:mm:ss A');
    $('#time').html(time);
    setTimeout(displayTime, 1000);
}



$(document).ready(function() {
    displayTime();
});

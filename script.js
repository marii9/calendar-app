// loads the html and css
 $(document).ready(function() 
 {
// shows the current day
var rightNow = dayjs().format('MMM DD, YYYY');
$('#currentDay').html(rightNow);






// saveBtn with a click listener and saves the input from the user
$('.saveBtn').on('click', function() {
  var saveWords = $(this).closest('.time-block').attr('id');
  var time = $(this).siblings('.description').val();
  console.log(saveWords);
  console.log(time);
  localStorage.setItem(saveWords, JSON.stringify(time));
});
// calls the time changer function 
timeChanger();
 });
//  gets data from the localStorage for each hour
 $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

function timeChanger () {
    // gets the current number of hours using moment.js
    var currentHour = moment().hour();
  console.log(currentHour)
// loops through the timeblocks
  $('.time-block').each(function(){
    console.log(this)
    var idNum = parseInt($(this).attr("id").split("hour")[1]);

     
// checks if the time is in the past,current,or future and applies a class in statement
    if (idNum < currentHour) {
        $(this).addClass('past');
      } else if (idNum == currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
})};



 
  

  
  
  
  
  
  
  

 
 
  


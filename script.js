

// getting the current day 
var rightNow = dayjs().format('MMM DD, YYYY ');
$('#currentDay').html(rightNow);



$(document).ready(function() {

// calling the classes
var saveBtn = $('.btn');




//   save button feature
saveBtn.on('click', function() {
  var saveWords = $(this).parent().attr('id');
  var time = $(this).siblings('.description').val();
  console.log(saveWords);
  console.log(time);
  localStorage.setItem(saveWords, JSON.stringify(time));
});
// function for changing the time 
function timeChanger () {
  var currentHour = dayjs().hour();
  console.log(currentHour)
//  looping through the time blocks
  $('.time-block').each(function(){
    var id = $(this).attr('id');
    var idNum = parseInt(id.split('-')[1]);
    var value = localStorage.getItem(id);
    // if statment to get the right classes
    $(this).find('.description').val(value);
    switch(true) {
      case idNum < currentHour:
        $(this).addClass('past');
        break;
      case idNum == currentHour:
        $(this).addClass('present');
        break;
      default:
        $(this).addClass('future');
        
    
  }});
  
  
  };
//   calling the function 
  timeChanger();

  
  
  
  
  
  

 
 
  
});

var rightNow = dayjs().format('MMM DD, YYYY ');
$('#currentDay').html(rightNow);



$(document).ready(function() {


var saveBtn = $('.btn');
// var theTimeEl = $('.time-block')



  
saveBtn.on('click', function() {
  var saveWords = $(this).parent().attr('id');
  var time = $(this).siblings('.description').val();
  console.log(saveWords);
  console.log(time);
  localStorage.setItem(saveWords, JSON.stringify(time));
});
function timeChanger () {
  var currentHour = dayjs().hour();
  console.log(currentHour)
 
  $('.time-block').each(function(){
    var id = $(this).attr('id');
    var idNum = parseInt(id.split('-')[1]);
    var value = localStorage.getItem(id);
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
  timeChanger();

  
  
  
  
  
  

 
 
  
});


// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
var todayTime = moment().format("hh:mm A");

$("#currentDay").html(todayDate);
$("#currentTime").html(todayTime);

  // convert to moment object at 5pm
  var time = moment(date, "L").set("hour", 17);

  // apply new clsss if event is in the past
  // apply new class if event is in the present
  // apply new class if event is in the future
  if (moment().isBefore(time)){
    $(".time-block").addClass("future");
  } 
  else if (moment().isSame(time)) {
        $(".time-block").addClass("present");
  }
  else (moment().isAfter(time)) {
    $(".time-block").addClass("past");
  }







$(".saveBtn").click(function () {
    //get values for time and event text 
    let hour = $(this).parent().parent().attr('id');
    console.log($(this).parent().parent().attr('id'));
    let text = $(this).parent().siblings('.time-block').children('.description').val();
    console.log($(this).parent().siblings('.time-block').children('.description').val());

    localStorage.setItem(hour, text)
});
    
// Get item from local storage if any
$("#900 .description").val(localStorage.getItem("900"));
$("#1000 .description").val(localStorage.getItem("1000"));
$("#1100 .description").val(localStorage.getItem("1100"));
$("#1200 .description").val(localStorage.getItem("1200"));
$("#1300 .description").val(localStorage.getItem("1300"));
$("#1400 .description").val(localStorage.getItem("1400"));
$("#1500 .description").val(localStorage.getItem("1500"));
$("#1600 .description").val(localStorage.getItem("1600"));
$("#1700 .description").val(localStorage.getItem("1700"));



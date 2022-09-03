// Current day and time (standard format)
var todayDate = moment().format("dddd, MMM Do YYYY");
var todayTime = moment().format("hh:mm A");
// current hour in mility time
var todayTimeMilitary = moment().hours();

// Display today's day and date in th header
$("#currentDay").html(todayDate);
$("#currentTime").html(todayTime);


function compareTime() {
  // target the time-block and get the id
  $(".time-block").each(function () {
    const theElement = $(this); // that has timeblock
    const theElementsId = theElement.attr("id"); 
    const theElementTime = theElementsId.replace("timeBlock-", ""); // turn: timeBlock-9 into: 9
    // convert string into a number
    const timeValueInRows = parseInt(theElementTime);
    // const timeValueInRows = 13;

    // convert the current time string into number
    const todayHourAsNumber = parseInt(todayTimeMilitary);
    // const todayHourAsNumber = 13;

    console.log(timeValueInRows, todayHourAsNumber);
    // apply new clsss if event is in the past
    // apply new class if event is in the present
    // apply new class if event is in the future
    if (timeValueInRows < todayHourAsNumber) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeValueInRows === todayHourAsNumber) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("future");
    }
  });
}

$(".saveBtn").click(function () {
  //get values for time and event text
  let hour = $(this).parent().parent().attr("id");
  console.log($(this).parent().parent().attr("id"));
  let text = $(this)
    .parent()
    .siblings(".time-block")
    .children(".description")
    .val();
  console.log(
    $(this).parent().siblings(".time-block").children(".description").val()
  );

  localStorage.setItem(hour, text);
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

compareTime();

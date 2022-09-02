// Display today's day and date
var todayDate = moment().format("dddd, MMM Do YYYY");
var todayTime = moment().format("hh:mm A");

$("#currentDay").html(todayDate);
$("#currentTime").html(todayTime);

function compareTime() {
  // get current number of hours.
  // loop through the time rows
  $(".time-block").each(function () {
    const theElement = $(this); // that has timeblock
    const theElementsId = theElement.attr("id"); // turn: timeBlock-9
    const theElementTime = theElementsId.replace("timeBlock-", ""); // into: 9
    //console.log(theElementTime);
    const timeValueInRows = parseInt(theElementTime);

    // convert the current time string into number
    const todayTimeHour = todayTime.slice(0, 2); // changes time string into: 10:00 AM in 10
    console.log(todayTimeHour);
    const todayHourAsNumber = parseInt(todayTimeHour);

    //convert into military time
    const timeValueInRowsAsMilitary = function () {
        if (timeValueInRows === 1) {
            // add 12 here
            timeValueInRows += 12;
        } else if (timeValueInRows === 2) {
            // add 12 here
            timeValueInRows += 12;
        } else if (timeValueInRows === 3) {
            // add 12 here
            timeValueInRows += 12;
        } else if (timeValueInRows === 4) {
           // add 12 here
           timeValueInRows += 12;
        } else if (timeValueInRows === 5) {
            // add 12 here
            timeValueInRows += 12;
        } else {
            console.log(timeValueInRows)
        }
    };

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

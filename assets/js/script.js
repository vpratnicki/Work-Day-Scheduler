
// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // save button was clicked
  $(".saveBtn").on("click", function () {
    // event.preventDefault();
    // get values of the event description
    var eventText = $(this).siblings("description").val();
    // get value of the time
    var eventTime = $(this).parent().attr("id");

    //save text in local storage
    localStorage.setItem(eventTime, eventText);
  })
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


// var events = {};

// var saveEvents = function () {
//     localStorage.setItem("events", JSON.stringify(events));
//   };

// var loadEvents = function () {
//     events = JSON.parse(localStorage.getItem("events"));

//       // if nothing in localStorage, create a new object to track all event time arrays
//   if (!events) {
//     events = {
//       nine: [],
//       ten: [],
//       eleven: []
//     };
//   }
//   // loop over object properties
//   $.each(events, function (list, arr) {
//     console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function (event) {
//       createTask(event.text, list);
//     });
//   });
// };
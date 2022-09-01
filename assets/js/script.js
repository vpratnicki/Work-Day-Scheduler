
// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var events = {};


// save button in modal was clicked
$("#900 .btn-save").click(function () {
    // get form values
    var eventText = $("#event-text").val();
    var eventTime = $("#time").val();

    console.log(eventText, eventTime)

      // save in tasks array
      events.push({
        text: eventText,
        time: eventTime
      });
  
      saveEvents();
    }
  );

var saveEvents = function () {
localStorage.setItem("events", JSON.stringify(events));
};

var loadEvents = function () {
events = JSON.parse(localStorage.getItem("events"));

// // if nothing in localStorage, create a new object to track all event time arrays
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

// // Get item from local storage if any
// $("#900 .description").val(localStorage.getItem("900"));
// $("#1000 .description").val(localStorage.getItem("1000"));
// $("#1100 .description").val(localStorage.getItem("1100"));
// $("#1200 .description").val(localStorage.getItem("1200"));
// $("#1300 .description").val(localStorage.getItem("1300"));
// $("#1400 .description").val(localStorage.getItem("1400"));
// $("#1500 .description").val(localStorage.getItem("1500"));
// $("#1600 .description").val(localStorage.getItem("1600"));
// $("#1700 .description").val(localStorage.getItem("1700"));

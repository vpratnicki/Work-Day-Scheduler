var events = {};

    
var saveEvents = function () {
    localStorage.setItem("events", JSON.stringify(events));
  };
  


var loadEvents = function () {
    events = JSON.parse(localStorage.getItem("events"));

      // if nothing in localStorage, create a new object to track all event time arrays
  if (!events) {
    events = {
      nine: [],
      ten: [],
      eleven: []
    };
  }
  // loop over object properties
  $.each(events, function (list, arr) {
    console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function (event) {
      createTask(event.text, list);
    });
  });
};

// save button was clicked
$("#nine-am .saveBTN").click(function () {
    // get form values
    var eventText = $("#nine-am-event").val();
    // var taskDate = $("#modalDueDate").val();
  
    if (eventText) {
      createEvent(eventText, "toDo");

  
      // save in tasks array
      events.toDo.push({
        text: eventText
        // date: taskDate
      });
  
      saveEvents();
    }
  });
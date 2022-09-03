# Work-Day-Scheduler

## Table of Content

- [Project Description](#project-description)
- [Project Outcome/Process](#project-outcomeprocess)
- [Built with](#build-with)
- [Website](#website)

## Project Description 

For this project, I created a daily work day planner. During the hours of 9 a.m. and 5 p.m. users are able to use this planner to schedule tasks and save them to their local storage. Users are presented with time blocks for each hour of a standard work day. Each time block is color-coded so that as the day progresses, the tasks that have passed will turn gray, the current hour will be displayed red and future tasks will be green. 

## Project Outcome/Process 

This page was created using the Bootstrap grid model. I utilized a 3 column layout and created some additional CSS to enhance the design. Once I was satisfied with the layout and all necessary HTML elements were in place, I tackled the first challenge of using local storage to save the tasks entered once the save button is selected.   

To do this I created a click event targeting the save button class. I created variables and determined the value of the text from the corresponding text area using some dom traversal with JQuery. Now that I had access the value of the text area and the id, I had what I targeted what I needed to set in local storage.

![Screenshot of code](/assets/images/screenshot1.png)

Next I displayed the date and time, using Moment.js, to the page header and defined these variables as the current date and time. I used the standard time format to display on the page, while I used miliary time for the function that compares current time and the time displayed in the html.  Please see comments in code below for additional explanation. 

![Screenshot of compare time function](/assets/images/screenshot2.png)

## Build with

- HTML
- Bootstrap
- CSS
- JavaScript
- JQuery
- Moment.js

## Website 

To view portfolio open:
[Work Day Scheduler](https://vpratnicki.github.io/Work-Day-Scheduler/).


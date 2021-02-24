# workday-scheduler
For this assignment I was tasked with creating a workday hourly timer.  I was given a style.css with some defined classes and id's to use as a starting point.

I started by adding a row for each one hour time slot in the 9 - 5 workday.  I added 3 columns to each of these rows. These columns contain the time title, the user input description area, and the save button.

In javascript, I started by using the moment() function to add the current date at the bottom of the header.

After this was accomplished, I used an if else statement to color code each hour block based on the current time of day.  

I added an on click function to the save button in order to save the user's inputed information to local storage. 

I finished by assigning the text value of each hour block's user input to what has been saved in local storage via the save button.  By doing this, the saved information will remain even when the page is refreshed.

Below is a screenshot of my live page as well as a link to the running application.

https://codyregis6891.github.io/workday-scheduler/

![workday-hourly-schedule-screenshot](./images/scheduler-screenshot.png)
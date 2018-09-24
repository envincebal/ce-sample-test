This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Scenario

The Port of Portland is the port district responsible for management of the Portland International
Airport, located at 45.5898° N, 122.5951° W. The port’s engineering directors are evaluating the
demands on the airport’s existing HVAC system, assessing whether it needs replacement. The
directors have asked you to provide a web-based report, summarizing a selected month's weather
data to assist with their assessment.

Currently, the HVAC system is set such that the air-conditioning system is turned on when the
outdoor temperature is over 75 degrees Fahrenheit. Similarly, the heating system is turned on
when the outdoor temperature is under 62 degrees Fahrenheit.
The engineering directors want to learn how often the air-conditioning and heating systems were
turned on for a given month. In particular, they would like a summary of data that provides the
following:

* For each day in the given date range, indicate whether the air-conditioning system was turned on
at least once.
* For each day in the given date range, indicate whether the heating system was turned on at least
once.

## Resources Used

* [Dark Sky API](https://darksky.net/dev)

## My Solution

I created a report app using React.js. This records heating and air conditioning data for the month of April 2018. The total AC and heating count for the entire month is displayed at the top. Under that, a table of each individual day is displayed along with the AC and heating count for that day. If one or the other was never turned on in any particular day, the number displaying will be in red. If one or the other is turned on at least once, then number of times it happened will be displayed in green.

This application makes use of flexbox and responsive design.
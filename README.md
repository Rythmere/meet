User Stories

Feature 1: As a user I should be able to “filter events by city” So that I can see the list of events that take place in my city.
Scenario 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
Scenario 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
Scenario 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city


Feature 2: As a user I should be able to expand and collapse an event so that I can view the information I am looking for.

Scenario 1: An event element is collapsed by default
Given user opened main page
When nothing has been clicked
Then event detail will be collapsed

Scenario 2: User can expand an event to see its details
Given user has clicked on an event
When an event has been clicked
Then event details will be shown/expanded

Scenario 3: User can collapse event to hide its details
Given user has clicked hide event details
When hide event details has been clicked
Then event will collapse hiding details

Feature 3: As a user I should be able to specify the number of events so that I can see the amount I want.

Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given used opened main page
When user has not specified number of events
Then number of events shown is 32

Scenario 2: User can change number of event they want to see
Given number of events to show has been changed
When user has entered number of event they want to see
Then number of events displayed equals users input

Feature 4: Use app when offline

 Scenario 1: Show cached data when there;s no internet connection
Given app has been opened
When there is no internet connection
Then load cached data

Scenario 2: Show error when user changes settings (city, time range)
Given settings have been with no internet connection
When user enters new settings
Then display error telling user that setting can’t be changed without internet

Feature 5:  Data visualization

Scenario 1: Show a chart with the number of upcoming event in each city
Given upcoming events for city have been loaded
When user has opened app and set there city
Then display chart of number of upcoming events



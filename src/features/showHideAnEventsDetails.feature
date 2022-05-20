Feature: As a user I should be able to expand and collapse an event so that I can view the information I am looking for.

Scenario: An event element is collapsed by default
Given nothing has been clicked
When user opened main page
Then event detail will be collapsed

Scenario: User can expand an event to see its details
Given The main page is open
When an event has been clicked
Then event details will be shown/expanded

Scenario: User can collapse event to hide its details
Given Event details are open
When hide event details has been clicked
Then event will collapse hiding details

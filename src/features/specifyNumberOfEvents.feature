Feature: As a user I should be able to specify the number of events so that I can see the amount I want.

Scenario: When user hasn’t specified a number, thirty-two is the default number.
Given user has not specified number of events
When user opened main page
Then number of events shown is thirty-two

Scenario: User can change number of event they want to see
Given the main page is open
When user has entered number of event they want to see
Then number of events displayed equals users input
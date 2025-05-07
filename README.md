# Lab 5 - JavaScript DOM Basics and GitHub Actions

## Team Members
- Edison Zhang

## GitHub Pages Links

- Party Horn (expose.html): https://edisonzhangucsd.github.io/Lab5_Starter/expose.html
- Speech Synthesis (explore.html): https://edisonzhangucsd.github.io/Lab5_Starter/explore.html

## Check Your Understanding

1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?
   - No, I would not use a unit test for the "message" feature. A message feature involves multiple components working together (user input, message sending, network communication, message display) and would require me to test the integration between these components. Unit tests are better suited for testing individual, isolated components (from lecture). For the message feature, integration tests or end-to-end tests would be more appropriate as this way I can test the complete flow of sending and receiving messages.

2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?
   - Yes, I would use a unit test for the "max message length" feature. This is a perfect use case for unit testing because:
     - It's a single, isolated functionality
     - It has clear input/output expectations
     - It doesn't depend on external systems
     - It can be tested with simple assertions
     - The logic is straightforward (check if length > 80)
   - Unit tests would be efficient for testing various scenarios like:
     - Messages exactly 80 characters
     - Messages over 80 characters
     - Messages under 80 characters
     - Empty messages
     - Messages with special characters

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!


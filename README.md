# web-playwright-ts
This is a web automation framework is build based on Playwright and Typescript

## Prerequisites
Before running the requirements, make sure you downloaded Node.js
- Node.js (v18 or higher)
- VSCode IDE

Then clone the repo and type the given command below on the terminal to install playwright 
- npm init playwright@latest

## To run test file
- Firstly download the react app 
- Then the react app should be started with 'npm start' command
- Then type for headless mode and runnint the test in all 3 browser : npx playwright test
- If you want to run the test in UI mode ex: on the chromium browser then type 'npx playwright test --headed --project chromium' command

## Reach the HTML report
- npx playwright show-report  

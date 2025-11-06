const reporter = require('cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

// Ensure reports directory exists
fs.ensureDirSync('reports');

// Generate HTML report
reporter.generate(options);

console.log('Extent HTML Report generated successfully!');
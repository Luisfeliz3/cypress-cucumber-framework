import { generate } from 'cucumber-html-reporter';
import { ensureDirSync } from 'fs-extra';
import path from 'path';

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
    "Platform": "Mac iOS",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

// Ensure reports directory exists
ensureDirSync('reports');

// Generate HTML report
generate(options);

console.log('Extent HTML Report generated successfully!');
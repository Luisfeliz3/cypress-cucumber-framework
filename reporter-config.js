const multipleCucumberHtmlReporter = require('multiple-cucumber-html-reporter');

multipleCucumberHtmlReporter.generate({
  jsonDir: 'reports/json',
  reportPath: 'reports/html',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  durationInMS: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cypress Cucumber Framework' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() }
    ]
  }
});
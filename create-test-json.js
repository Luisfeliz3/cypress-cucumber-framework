// create-test-json.js
const fs = require('fs');
const path = require('path');

const testJson = [
  {
    "description": "Test feature",
    "elements": [
      {
        "description": "",
        "id": "test-feature;test-scenario",
        "keyword": "Scenario",
        "line": 1,
        "name": "Test Scenario",
        "steps": [
          {
            "keyword": "Given ",
            "name": "I run a test",
            "result": {
              "status": "passed",
              "duration": 1000000000
            },
            "line": 2
          }
        ],
        "type": "scenario"
      }
    ],
    "keyword": "Feature",
    "name": "Test Feature",
    "uri": "test.feature"
  }
];

const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

fs.writeFileSync(
  path.join(reportsDir, 'cucumber_report.json'),
  JSON.stringify(testJson, null, 2)
);

console.log('✅ Created test JSON file');
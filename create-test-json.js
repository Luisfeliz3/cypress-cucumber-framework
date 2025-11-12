// create-test-json.js
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

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

const reportsDir = join(__dirname, 'reports');
if (!existsSync(reportsDir)) {
  mkdirSync(reportsDir, { recursive: true });
}

writeFileSync(
  join(reportsDir, 'cucumber_report.json'),
  JSON.stringify(testJson, null, 2)
);

console.log('✅ Created test JSON file');
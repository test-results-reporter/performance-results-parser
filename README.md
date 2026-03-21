# performance-results-parser

A Node.js utility for parsing performance test results from tools like JMeter and more. It allows you to aggregate metrics across multiple result files and apply success thresholds.

## Features

- **Multi-format Support**: Parse JMeter CSV and JTL result files.
- **Metric Aggregation**: Automatically aggregates performance metrics (Samples, Duration, Errors, Data Sent, Data Received, Latency).
- **Success Thresholds**: Define success/failure criteria based on metrics at global (OVERALL) or transaction (TRANSACTION) levels.
- **Secure Parsing**: Includes internal protection against prototype pollution in result parsing.

## Installation

```bash
npm install performance-results-parser
```

## Usage

### Basic Example

```javascript
const parser = require('performance-results-parser');

const results = parser.parse({
  type: 'jmeter',
  files: ['tests/data/jmeter/sample.csv']
});

console.log(JSON.stringify(results, null, 2));
```

### With Thresholds

You can specify thresholds to determine if the test results pass or fail.

```javascript
const parser = require('performance-results-parser');

const results = parser.parse({
  type: 'jmeter',
  files: ['tests/data/jmeter/sample.csv'],
  thresholds: [
    {
      metric: 'Duration',
      checks: ['avg<500', 'p95<2000']
    },
    {
      metric: 'Errors',
      checks: ['rate<0.1'],
      scope: 'OVERALL'
    },
    {
      metric: 'Samples',
      checks: ['sum>10'],
      scope: 'TRANSACTION',
      transactions: ['S01_T02_Application_Login']
    }
  ]
});

if (results.status === 'FAIL') {
  console.error('Performance thresholds not met!');
}
```

## Supported Formats

Currently, the library supports:
- **JMeter**: `.csv`, `.jtl` (XML/CSV)

## Contributing

We welcome contributions! Please ensure your pull requests meet the following criteria:

- **Conventional Commits**: PR titles must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification (e.g., `feat(parser): add support for k6`).
- **Tests**: Include new or updated tests for any changes.
- **Verification**: Run `npm test` and ensure all tests pass.

## License

ISC

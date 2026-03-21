# AGENTS.md

## Project Overview

- **What**: A Node.js utility for parsing performance test results from tools like JMeter.
- **Why**: It simplifies the process of aggregating performance metrics and applying success thresholds across multiple result files.

## Development & HOW-TO

- **Install dependencies**: `npm install`
- **Run tests**: `npm test`
- **Verification**: Always run `npm test` before submitting changes.

## Project Structure

- `src/`: Core logic for parsing performance result formats.
  - `parsers/`: Parsers for specific formats (currently JMeter).
  - `helpers/`: Utility functions, including a custom CSV-to-JSON parser.
- `tests/`: Test suites using Mocha and C8 for coverage.

## CI/CD and Conventions

- **PR Titles**: Follow Conventional Commits: `type(scope): description`.
- **Node.js**: The CI/CD workflows use Node.js 25.x.
- **Releases**: Automated via `release-please`. Packages are published to npm using GitHub OIDC.
- **Security**: For all data parsing logic, explicitly filter or ignore `__proto__`, `constructor`, and `prototype` keys to prevent prototype pollution.

---
*Note: This repository requires all contributions to follow Conventional Commits.*

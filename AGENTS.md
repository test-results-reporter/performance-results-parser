# AGENTS.md

This project is a Node.js utility for parsing performance test results from tools like JMeter and more.

## Development Setup

- **Install dependencies**: `npm install`
- **Run tests**: `npm test`
- **Node.js Versions**: Supported on recent LTS versions (e.g., Node.js 18.x, 20.x, 22.x, 24.x).

## Project Structure

- `src/`: Contains the logic for parsing different performance result formats.
- `tests/`: Contains test suites for the parser.

## CI/CD and Releases

- **PR Titles**: This project uses Conventional Commits. Ensure your PR title follows the format: `type(scope): description` (e.g., `feat(parser): add support for new format`).
- **Automated Releases**: We use `release-please` to automate versioning and changelog generation.
- **Publishing**: Packages are automatically published to npm via GitHub Actions upon release using GitHub OIDC and provenance.

## PR Guidelines

- **Tests**: All new features or bug fixes must include corresponding tests.
- **Verification**: Run `npm test` to ensure all tests pass before submitting.

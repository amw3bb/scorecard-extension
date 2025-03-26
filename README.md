# Scorecard Extension for GitHub Copilot

This project is designed to interact with the Security Scorecards API to fetch and display security scorecard data for specified repositories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Functions](#api-functions)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd skillset-project
npm install
```

## Usage

To run the application, use the following command:

```bash
node src/index.js <repository-url>
```

Replace `<repository-url>` with the URL of the repository you want to check.

## API Functions

### fetchScorecard(repositoryUrl)

This function takes a repository URL as an argument and returns the scorecard data from the Security Scorecards API.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

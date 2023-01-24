// Imports.
const inquirer = require('inquirer');
const fs = require('fs');


// Main content.
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'projectDesc',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInst',
    },
    {
        type: 'input',
        message: 'What is the usage information of the project?',
        name: 'usageInf',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of the project?',
        name: 'contribGuide',
    },
    {
        type: 'input',
        message: 'What are the test instructions for the project?',
        name: 'testInst',
    },
    {
        type: 'list',
        message: 'What kind of license would you like for the project?',
        name: 'licenseType',
        choices: ["None", "MIT", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Apache 2.0", "ISC", "Mozilla Public License 2.0", "Boost SW License 1.0",
            "The Unilicense", "CC0-1.0", "CC-BY-4.0", "CC-BY-SA-4.0", "SIL Open Font License 1.1", "CERN-OHL-P-2.0", "CERN-OHL-W-2.0", "CERN-OHL-S-2.0"],
        default: 0,
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubName',
    },
]).then((response) =>
    writeReadme(response.projectName,
        response.projectDesc,
        response.installInst,
        response.usageInf,
        response.contribGuide,
        response.testInst,
        response.licenseType,
        response.emailAddress,
        response.githubName)
);


const writeReadme = function (title,
    description,
    install,
    usage,
    contribution,
    test,
    license,
    email,
    github) {
    var badgeLink = `![${license}]https://img.shields.io/badge/License-${license}-success`
    var readmeText = `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${usage}

    "md
    ![alt text](assets/images/screenshot.png)
    "

## License

This project is covered under the ${license} license.
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

${contribution}

## Tests

${test}`
}

![GitHub](https://img.shields.io/github/license/error201/StreamingSearch)

    https://img.shields.io/badge/License-MIT-success
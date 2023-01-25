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
        default: ["MIT"],
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
]).then((response) => writeReadme(response.projectName,
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
    var badgeLink = `![license](https://img.shields.io/static/v1?label=License&message=${license}&color=success)`
    var readmeText = `# **${title}**

${badgeLink}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## License

This project is covered under the ${license} license.

## How to Contribute

${contribution}

## Tests

${test}

## Questions

- My GitHub profile: [GitHub Profile](https://github/${github})
- Please email me at [here](${email}) for any further questions.`
        fs.writeFile('./assets/README.md', readmeText, 'utf8',(err) =>{
            if (err){
                console.log('err');
            } else {
                console.log('File written!');
            }
        })
}

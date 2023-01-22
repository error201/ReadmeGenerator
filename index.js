// Imports.
const inquirer = require('inquirer');
const fs = require('fs');

// Globals.


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
]).then((response) =>
    response.confirm === response.password
        ? console.log('Success!')
        : console.log('You forgot your password already?!')
);
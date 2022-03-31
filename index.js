// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name!');
                    return false;
                };
            },
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a description of your project (Required):',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                };
            },
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to include installation instruction?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions:',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                };
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this projects usage for? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your projects usage!');
                    return false;
                };
            },
        }, 
        {
            type: 'input',
            name: 'contributors',
            message: 'Please add any contributors (Required):',
            validate: contributorsInput => {
                if (contributorsInput) {
                    return true;
                } else {
                    console.log('Please add contributors!');
                    return false;
                };
            },
        },
        {
            type: 'confirm',
            name: 'confirmTestInstructions',
            message: 'Would you like to include test instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter the test instructions:',
            when: ({ confirmTestInstructions }) => {
                if (confirmTestInstructions) {
                    return true;
                } else {
                    return false;
                };
            },
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license for this project (Required):',
            choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser();
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([

        // Project name question
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name!');
                    return false;
                };
            },
        },

        // Project description question
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a description of your project:',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                };
            },
        },

        // Installation and confirm installation questions
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

        // Project usage question
        {
            type: 'input',
            name: 'usage',
            message: 'What is this projects usage for?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your projects usage!');
                    return false;
                };
            },
        }, 

        // Contributors question
        {
            type: 'input',
            name: 'contributors',
            message: 'Please add any contributors',
            validate: contributorsInput => {
                if (contributorsInput) {
                    return true;
                } else {
                    console.log('Please add contributors!');
                    return false;
                };
            },
        },

        // Test instructions and confirm test instructions questions
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

        // License question
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license for this project:',
            choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
        },

        // GitHub username question
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username:',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                };
            },
        },

        // Email question
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Email!');
                    return false;
                };
            },
        },

        // How to reach out question
        {
            type: 'input',
            name: 'reachOut',
            message: 'Please provide instructions on how to reach you:',
            validate: reachOutInput => {
                if (reachOutInput) {
                    return true;
                } else {
                    console.log('Please provide instructions on how to reach you!');
                    return false;
                };
            },
        }
    ]);
};

// TODO: Create a function to write README file
const createFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been created!')
        };
    });
};

promptUser()
.then (answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return createFile(data);
})
.catch(err => {
    console.log(err);
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
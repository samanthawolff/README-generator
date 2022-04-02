// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)

  ## Description
  ${data.projectDescription}

  ## Table of Contents (figure out linking later)
  * Installation
  * Usage
  * License
  * Contributors
  * Test Instructions
  * Questions
  
  ## Installation Instructions
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licensing
  This project is licensed under ${data.license}

  ## Contributions
  ${data.contributors}

  ## Test Instructions
  ${data.testInstructions}

  ## Questions
  * GitHub Username: ${data.githubUsername}
  * Email: ${data.email}
  * How to Reach out to me: ${data.reachOut}
`;
}

module.exports = generateMarkdown;

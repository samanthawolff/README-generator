// function to generate markdown
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licensing](#licensing)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licensing
  This project is licensed under ${data.license}

  ## Contributions
  ${data.contributors}

  ## Testing
  ${data.testInstructions}

  ## Questions
  * GitHub Username: ${data.githubUsername}
  * Email: ${data.email}
  * How to Reach out to me: ${data.reachOut}
`;
}

module.exports = generateMarkdown;

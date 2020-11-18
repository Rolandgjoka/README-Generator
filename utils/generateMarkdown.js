// function to generate markdown for README
// function to generate markdown for README

module.exports = generateMarkdown;

// generateReadme function populating the README.md
function generateMarkdown(response) {
  return `
<h1 align="center">${response.TitleOfProject} </h1>


## Description
 ${response.Description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
 ${response.Install}
## Usage
 ${response.Usage}
## License
This application is covered by the ${response.License} license. 
## Contributing
 ${response.Contributors}
## Tests
 ${response.Tests}
## Questions
${response.Questions}
Email me with any questions: ${response.Email}

  `;
}

module.exports = generateMarkdown;
  
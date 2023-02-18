// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-yellowgreen.svg)

  
  ## Description 📄
  ${data.description}

  ## Table of Contents
  * [Installation](#dependencies)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 📥 
  ${data.dependencies}

  ## Usage 🔩
  ${data.usage}

  ## License 🛡 
  This project is licensed under ${data.license}

  ## Contributors 🙈🙉🙊
  ${data.contributors}

  ## Testing 💻
  ${data.test}

  ## Questions 📩
  If you have any queries about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;

}

// function to render badge
// function renderBadge(license) {
//   if (license !== "None") {
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
//   }
//   return ''
// }

const renderBadge = license => {
  return ` !== "None")
  ? ![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)
  : '';`
  }

// function to render link
const renderLink = license => {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `## License 📛

      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

// use for importing Markdown in index 
module.exports = generateMarkdown;
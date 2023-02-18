// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for input to generate the README
const questions = [
    {
        type: "input",
        name: "github",
        message: "Your Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Your email address."
    },
    {
        type: "input",
        name: "title",
        message: "Title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project, explaining the what, why and how. Use the following as a guide:\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2", "BSD3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Steps required to install your project? Provide a step-by-step description of how to get the development environment running. Are there any dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run for testing?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating... Please wait...");
            writeToFile("./dist/README.md", generateMarkdown(inquirerAnswers));
        })

}

// function call to initialize program
init();

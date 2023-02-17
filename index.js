// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for input to generate the README
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project:"
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
        message: "Are there any dependencies to install?",
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
        message: "What is this repo used for?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors to this repo?",
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

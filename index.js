const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your Application Repository?"
    },
    {
        type: "input",
        name: "TitleOfProject",
        message: "What is the title of your Project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "Install",
        message: "Please write the instructions to successfully install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How can your project be used?"
    },
    {
        type: "list",
        name: "License",
        message: "What license you would like to use for your project?",
        choices: [{
            name: "License A",
            },
            {
            name: "License B"
            },
            {
            name: "License C"
            },
            {
            name: "No License"
            }]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Are there other contributors on your project?",
        validate: validateContributors
    },
    {
        type: "input",
        name: "Tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "Questions",
        message: "How to reach out if i have additional questions? "
    },
    
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }
    });
}

// function to initialize program
function init() {
    try {
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHubUsername);
        const readMe = generateMarkdown(answers, user);
        writeToFile("GeneratedREADME.md", readMe);
        console.log("**README file successfully created!**");
        
    }catch(err) {
        console.log(err);
        
    }
    

}


// function call to initialize program
init();

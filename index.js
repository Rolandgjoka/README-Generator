const inquirer = require("inquirer");
const fs = require("fs/promises");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

    inquirer
    .prompt([
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "TitleOfProject",
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "Please write the instructions to successfully install your project?",
        name: "Install",
    },
    {
        type: "input",
        message: "How can your project be used?",
        name: "Usage",
    },
    {
        type: "checkbox",
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
        message: "Are there other contributors on your project?",
        name: "Contributors",
        
    },
    {
        type: "input",
        message: "Is there a test included?",
        name: "Tests",
    },
    {
        type: "input",
        message: "How to reach out if i have additional questions? ",
        name: "Questions",
    },
    
    {
        type: "input",
        message: "Please enter your email: ",
        name: "Email",
    }

])

.then ((response)=>{
    console.log(response)
    const readMe = generateMarkdown(response);
    fs.writeFile("README.md",readMe,(error) =>{
        console.log(error);

    })
}

)


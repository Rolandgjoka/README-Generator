const inquirer = require("inquirer");
// const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//const questions = [
    inquirer
    .prompt([
    {
        type: "input",
        message: "What is your Application Repository?",
        name: "GitHub",
    },
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
        name: "email",
    }

])

.then ((response)=>{
    console.log(response)
}

)


// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err){
//         if (err){
//             console.error(err);
//         }
//     });
// }

// // function to initialize program
// async function init() {
//     try {
//         const questions = await prompt();
//         const user = await api.getUser(questions.GitHubUsername);
//         const readMe = generateMarkdown(questions, user);
//         writeToFile("GeneratedREADME.md", readMe);
//         console.log("**README file successfully created!**");
        
//     }catch(err) {
//         console.log(err);
        
//     }
    

// }


// // function call to initialize program
//  init();

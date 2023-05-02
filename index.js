const generateProfile = require("./src/generateProfile");
const inquirer = require('inquirer');
const fs = require('fs'); 
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");

const addEmployee = async () => {
    const { name } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter employees name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter employee's name");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter employees id",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter employee's id");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter employees email",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter employee's email");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "github",
        message: "Enter employees github",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter employee's github");
            return false;
          }
        }
      },
    ])
};

const addManager = async () => {
    const { name } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter managers name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter manager's name");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager's id",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter manager's id");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter manager's email");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter manager's office numbers");
            return false;
          }
        }
      }
      .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        return(manager);

      })
    ]);
    return name;
   };

   const addIntern = async () => {
    const { name } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Intern's name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter Intern's name");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter Intern's id",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter intern's id");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter interns email",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter intern's email");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "school",
        message: "Enter interns school",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter intern's school");
            return false;
          }
        }
      },
    ])
};

const addEngineer = async () => {
    const { name } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter engineer's name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter engineer's name");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer's id",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter engineer's id");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter engineer's email",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter engineer's email");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer's github",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter engineer's github");
            return false;
          }
        }
      },
    ])
};

const writeFile = inputAll => {
    fs.writeFile("./dist/index.html", inputAll, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("success")
        }
    })
}; 

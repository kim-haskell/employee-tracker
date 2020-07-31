const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "kjsmalley7634",
    database: "employees_DB"
});



function userMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all Employees", "View all departments", "View all roles", "Add employee", "Update employee role"]
        }
    ]).then(({ action }) => {    // takes answers.action and breaks it into its own variable
        switch (action) {
            case "View all Employees":
                viewEmployees();
                break;
            case "View all departments":
                    viewDepartment();
                    break;
            case "View all roles":
                viewRole();
                break;    
            case "Add employee":
                addEmployee();
                break;  
            case "Update employee role":
                updateEmployee();
                break;   
                   
            default:
                connection.end();

        }
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`Now connected to MySQL at thread ${connection.threadId}`);

    userMenu();

});


    const viewRole = () => {
        connection.query("SELECT * FROM role", (err, result) => {
            if (err) throw err;
            console.table(result);

            userMenu();
        });
    }
    
    const viewEmployees = () => {
    
        connection.query("SELECT * FROM employees", (err, result) => {
            if (err) throw err;
            
            console.table(result);

            userMenu();
        });
    }
    const viewDepartment = () => {
        connection.query("SELECT * FROM department", (err, result) => {
            if (err) throw err;
            console.table(result);

            userMenu();
        });
    }


function addEmployee() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the employee's first name?",
        },
        {
            name: "lastName",
            message: "What is the employee's last name?",
        },
        {
            name: "role",
            type: "list",
            message: "What is the employees's role?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Accountant"]

        },
        {
            name: "manager",
            type: "list",
            message: "Who is the employees's manager?",
            choices: ["Jessica Day", "CeCe S", "Nick Miller"]

        }
    ]).then(({ name, lastName, role, manager }) => {
        connection.query("INSERT INTO  SET ?",
            {
                name: name,
                lastName: lastName,
                role: role,
                manager: manager,
            },
            (err, result) => {
                if (err) throw err;
                console.log("Successfully added employee!");
                userMenu();
            }
        )
    })
};


// function updateEmployee() {
//     inquirer.prompt([
//         {
//             name: "name",
//             message: "Wh",
//         },
//         {
//             name: "category",
//             message: "What category would you like to list under?"
//         },
//         {
//             name: "starting_bid",
//             message: "What is your starting bid?"

//         }
//     ]).then(({ name, category, starting_bid }) => {
//         connection.query("INSERT INTO auctions SET ?",
//             {
//                 name: name,
//                 category: category,
//                 starting_bid: starting_bid,
//                 current_bid: starting_bid
//             },
//             (err, result) => {
//                 if (err) throw err;
//                 console.log("Successfully added auction item!");
//                 userMenu();
//             }
//         )
//     })
// }


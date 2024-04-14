import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n\tWelcome to my TODO-List Application\n"));
let todolist = [];
let conditions = true;
while (conditions) {
    let addtask = await inquirer.prompt({
        name: "task",
        message: "\n\tEnter a new Task:",
        type: "input"
    });
    todolist.push(addtask.task);
    console.log(`\n\t${addtask.task} is added to your list`);
    let addmore = await inquirer.prompt({
        name: "moretask",
        message: "\n\tWant to add more task? ",
        type: "confirm",
        default: "false"
    });
    conditions = addmore.moretask;
}
console.log("\n\tYour Updated TODO-List is: ", todolist);

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    PKR: 277.54,
    EURO: 0.92,
    GBP: 0.79,
    IND: 83.30,
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.yellow("Select Your From Currency"),
        choices: ['USD', 'PKR', 'EURO', 'GBP', 'IND']
    },
    {
        name: "to",
        type: "list",
        message: chalk.yellow("Select Your to Currency"),
        choices: ['USD', 'PKR', 'EURO', 'GBP', 'IND']
    },
    {
        name: "amount",
        type: "number",
        message: chalk.green("Please Enter Your Conversion Amount")
    },
]);
let fromAmount = currency[user_input.from];
let toAmount = currency[user_input.to];
let userAmount = user_input.amount;
let dollarAmount = userAmount / fromAmount;
let convertCurrency = dollarAmount * toAmount;
console.log(chalk.red(`your Conversion amount is ${convertCurrency}`));

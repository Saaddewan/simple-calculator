#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "Enter firstnumber", type: "number", name: "firstnumber" },
    { massage: "Enter Secondnumber", type: "number", name: "Secondnumber" },
    {
        massage: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["additon", "subtraction", "multipliaction", "division"]
    }
]);
if (answer.operator === "additon") {
    console.log(answer.firstnumber + answer.Secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.Secondnumber);
}
else if (answer.operator === "multipliaction") {
    console.log(answer.firstnumber * answer.Secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.Secondnumber);
}
else {
    console.log("please select valid operator");
}

import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)

let myBalance: number = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter Student Name:",
            validate: function (value: any) {
                if (value.trim() !== "") {
                    return true;
                }
                return "please enter a non -empty value.";
            },
        },
        {
            name: "courses",
            type: "list",
            message: "select the course to enrolled",
            choices: ['MS.Office', "HTML", "Javascript", "Phyton"],
        }
    ]
);
const tutionFee: { [key: string]: number } = {
    "MS.Office": 2000,
    "HTML": 2500,
    "Javascript": 50000,
    "phyton": 10000,

};
console.log(`\n Tution Fees:${tutionFee[answer.courses]}\n`);
console.log(`balance:${myBalance}\n`);

let paymentType = await inquirer.prompt([{
    name: "payment",
    type: "list",
    message: "select payment method",
    choices: ["bank transfer", "Easy paisa", "Jazz cash"]
},
{
    name: "amount",
    type: "input",
    message: "transfer Money",
    validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Plz enter a non-empty value"
    }
}]);
console.log(`\n you select payment method ${paymentType.payment}`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if (tutionFees === paymentAmount) {
    console.log(`congratullations, you have successfully enroled in ${answer.courses}.\n`);

    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next",
            choices: ["view status","exit"]
        }
    ])
    if (ans.name === "view status") {
        console.log("\n **********status*******\n");
        console.log(`student name: ${answer.students}`);
        console.log(`"student ID: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`tution fees paid : ${paymentAmount}`);
        console.log(`balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log(" Exiting student managment system");

    }
}
else {
    console.log("Invalid amount due to course\n");
}

import inquirer from "inquirer";
class Student {
    stdId;
    stdName;
    course;
    fees;
    constructor(stdId, stdName, course, fees) {
        this.stdId = stdId;
        this.stdName = stdName;
        this.course = course;
        this.fees = fees;
    }
}
const randomNumber = Math.floor(10000 + Math.random() * 7000);
let myBalance = 0;
let contineEnrollment = true;
let studentList = [];
do {
    let select = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "Select Your Option:",
        choices: ["Enroll a student", "Check Students Status", "Exit"],
    });
    if (select.ans === "Enroll a student") {
        let select = await inquirer.prompt([
            {
                name: "stdName",
                type: "input",
                message: "Enter Student Name:",
            },
        ]);
        let trimmedName = select.stdName.trim().toLowerCase();
        let stdNameCheck = studentList.map((obj) => obj.stdName);
        if (stdNameCheck.includes(trimmedName) === false) {
            if (trimmedName !== "") {
                let studentId = randomNumber;
                let fees = 0;
                console.log("\n\t\tYou Account Is Created Now");
                console.log(`*******************  Welcome  ${trimmedName.toUpperCase()}  *******************************`);
                let course = await inquirer.prompt({
                    name: "course",
                    type: "list",
                    message: "Select Your Course:",
                    choices: ["Html", "Css", "JavaScript", "NextJs"],
                });
                switch (course) {
                    case "Html":
                        fees = 2000;
                        break;
                    case "Css":
                        fees = 3000;
                        break;
                    case "JavaScript":
                        fees = 5000;
                        break;
                    case "NextJs":
                        fees = 8000;
                        break;
                    default:
                        break;
                }
                let confirmation = await inquirer.prompt({
                    name: "confirm",
                    type: "confirm",
                    message: "Are You Sure You Want To Be Enrolled In This Course?",
                });
                if (confirmation.confirm === true) {
                    let student = new Student(studentId, trimmedName, [course.course], fees);
                    studentList.push(student);
                    console.log("You Are Now Enrolled In Course");
                }
            }
            else {
                console.log("Enter A Valid Name");
            }
        }
        else {
            console.log("Your Name Already Exist");
        }
    }
    else if (select.ans === "Check Students Status") {
        if (studentList.length !== 0) {
            let studentNameCheck = studentList.map(i => i.stdName);
            let selectStudent = await inquirer.prompt({
                name: "ans",
                type: "list",
                message: "Select Student Name:",
                choices: studentNameCheck,
            });
            let selectedStudent = studentList.find(student => student.stdName === selectStudent.ans);
            console.log("------Student Information------");
            console.log(selectedStudent);
            console.log(`\n\n`);
        }
        else {
            console.log("\n\n\t\t.................No Students Enrolled Yet...................");
        }
    }
    else if (select.ans === "Exit") {
        console.log("\n\n\t\t.................Thank You For Using Our Services...................");
        process.exit();
    }
    let userConfirm = await inquirer.prompt({
        name: "confirm",
        type: "confirm",
        message: "Do You Want To Continue?",
    });
    if (userConfirm.confirm === false) {
        contineEnrollment = false;
        console.log("\n\n\t\t.................Thank You For Using Our Services...................");
        process.exit();
    }
    else
        (userConfirm.confirm === true);
    {
        contineEnrollment = true;
    }
} while (true);

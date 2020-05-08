// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

const employee2 = new Intern("UofU");
//returns undefined
employee2.printDetails();

module.exports = Intern;

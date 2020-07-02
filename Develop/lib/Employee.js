// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    printDetails() {
        console.log(`
        ${this.name}
        ${this.id}
        ${this.email}
        ${this.role}`)
    }
}

const employee1 = new Employee("Jordan", 123, "joneal6694@gmail.com")
employee1.printDetails();

module.exports = Employee;
const Employee = require("./employee");


class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }

getOfficeNumber () {
    return this.officeNumber
}

getRole () {
    return "Manager"
}

};

module.exports = Manager;
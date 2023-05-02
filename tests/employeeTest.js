const Employee = require("../lib/Employee");

test("adding a new employee", () => {
    const newEmployee = new Employee("Jack Johnson", 10012, "jackjohnson@us.org")
    expect(newEmployee.name).toEqual(expect.any(String));
    expect(newEmployee.id).toEqual(expect.any(Number));
    expect(newEmployee.email).toEqual(expect.any(String));

});

test("get name", () => {
    const newEmployee = new Employee("Jack Johnson", 10012, "jackjohnson@us.org")
    expect(newEmployee.getName()).toEqual(expect.any(String));
})
    
test("get id", () => {
    const newEmployee = new Employee("Jack Johnson", 10012, "jackjohnson@us.org")
    expect(newEmployee.getId()).toEqual(expect.any(Number));
})

test("get email", () => {
    const newEmployee = new Employee("Jack Johnson", 10012, "jackjohnson@us.org")
    expect(newEmployee.getEmail()).toEqual(expect.any(String));
})

    test("get role", () => {
    const newEmployee = new Employee("Jack Johnson", 10012, "jackjohnson@us.org")
    expect(newEmployee.getRole()).toEqual(expect.any(String));
});
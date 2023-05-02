const Manager = require("../lib/manager");

test("creates Manager", () => {
    const newManager = new Intern("Jack Johnson", 10012, "jackjohnson@us.org", 900)
    expect(newManager.officeNumber).toEqual(expect.any(Number));

})

test("get role", () => {
    const newManager = new Manager("Jack Johnson", 10012, "jackjohnson@us.org", "jackjohnson3", 900)
    expect(manager.getRole()).toEqual("Manager");
});
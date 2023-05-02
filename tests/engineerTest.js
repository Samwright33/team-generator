const Engineer = require("../lib/engineer");

test("creates engineer", () => {
    const newEngineer = new Engineer("Jack Johnson", 10012, "jackjohnson@us.org", "jackjohnson3")
    expect(newEngineer.github).toEqual(expect.any(String));

})

test("get role", () => {
    const newEngineer = new Engineer("Jack Johnson", 10012, "jackjohnson@us.org", "jackjohnson3")
    expect(engineer.getRole()).toEqual("Engineer");
});
const Intern = require("../lib/intern");

test("creates Intern", () => {
    const newIntern = new Intern("Jack Johnson", 10012, "jackjohnson@us.org", "New Mexico State")
    expect(newIntern.school).toEqual(expect.any(String));

})

test("get role", () => {
    const newIntern = new Intern("Jack Johnson", 10012, "jackjohnson@us.org", "jackjohnson3", "New Mexico State")
    expect(intern.getRole()).toEqual("Intern");
});
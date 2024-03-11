import Person from "."

it("should display correct name", () => {
    const person = new Person()
    expect(person.sayMyName()).toBe("Stylish")
})

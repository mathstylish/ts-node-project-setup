import Person from "@/models/person"

it("should display correct name", () => {
    const person = new Person()
    expect(person.sayMyName()).toBe("Stylish")
})

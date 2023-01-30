import {StudentType} from "../02_object_test/02";
import {addSkill} from "./03";
import {makeStudentActive} from "./03";
import {doesStudentLiveIn} from "./03"

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych", // ключ : значение
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("student lives in City", () => {
    let res1 = doesStudentLiveIn(student, "Moscow")
    let res2 = doesStudentLiveIn(student, "Minsk")

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})
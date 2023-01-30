import {StudentType} from "../02_object_test/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}
export const doesStudentLiveIn = (s:StudentType, cityName: string) => {
    return (s.address.city.title === cityName)
}
/*
    Responsible for managing all of the Student's data
*/

// a copy of our Student data
let students = []

// the eventHub in which all events are heard
const eventHub = document.querySelector(".container")

// the function that makes a copy of our copy of our Student data
export const useStudents = () => students.slice()

/*
    Sends a message out to the application via eventHub that the state of the notes was changed
*/
const dispatchStateChangeEvent = () => {
    const studentStateChangedEvent = new CustomEvent("studentStateChanged")

    eventHub.dispatchEvent(studentStateChangedEvent)
}

// gonna need a method that fetches (GETs) Students
export const getStudents = () => {
    return fetch("http://localhost:8088/students")
        .then((response) => response.json())
        .then((parsedStudents) => {
            students = parsedStudents
        })
}

// gonna need a method that creates (POSTs) Students
export const createStudent = (studentObj) => {
    return fetch('http://localhost:8088/students', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentObj)
    })
    .then(getStudents)
    .then(dispatchStateChangeEvent)
}
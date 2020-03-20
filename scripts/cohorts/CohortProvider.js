/*
    Responsible for managing all of the cohort's data
*/

// a copy of our cohort data
let cohorts = []

// the eventHub in which all events are heard
const eventHub = document.querySelector(".container")

// the function that makes a copy of our copy of our cohort data
export const useCohorts = () => cohorts.slice()

/*
    Sends a message out to the application via eventHub that the state of the notes was changed
*/
const dispatchStateChangeEvent = () => {
    const cohortStateChangedEvent = new CustomEvent("cohortStateChanged")

    eventHub.dispatchEvent(cohortStateChangedEvent)
}

// gonna need a method that fetches (GETs) cohorts
export const getCohorts = () => {
    return fetch("http://localhost:8088/cohorts")
        .then((response) => response.json())
        .then((parsedCohorts) => {
            cohorts = parsedCohorts
        })
}

// gonna need a method that creates (POSTs) cohorts
export const createCohort = (cohortObj) => {
    return fetch('http://localhost:8088/cohorts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cohortObj)
    })
    .then(getCohorts)
    .then(dispatchStateChangeEvent)
}
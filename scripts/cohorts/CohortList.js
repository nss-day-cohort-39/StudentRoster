/*
    Responsible for getting all of the cohorts and putting each one on the DOM 👍 
*/
import { useCohorts } from "./CohortProvider.js"
import { CohortHTML } from "./Cohort.js"

const cohortContainer = document.querySelector(".cohort_list")
const eventHub = document.querySelector(".container")

// add an event listener on the eventHub that listens for the cohortStateChanged custom event
eventHub.addEventListener("cohortStateChanged", () => {
    // when the cohort's state has changed, clear the cohort container and render the cohort list again
    cohortContainer.innerHTML = ""
    render()
})

// the function that renders the cohort list (and does all the things for cohort list)
const render = () => {
    // use the data to put each cohort on the DOM
    const allCohorts = useCohorts()
    
    // iterate through all of the cohorts and put each one on the DOM
    for (const singleCohort of allCohorts) {
        cohortContainer.innerHTML += CohortHTML(singleCohort)
    }
}

// this the function that invokes the render method for cohort list
export const CohortList = () => {
    render()
}
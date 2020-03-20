/*
    Responsible for getting all of the cohorts and putting each one on the DOM 👍 
*/
import { useCohorts } from "./CohortProvider.js"
import { CohortHTML } from "./Cohort.js"

const cohortContainer = document.querySelector(".cohort_list")

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
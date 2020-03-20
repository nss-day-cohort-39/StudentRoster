/*
    Responsible for creating the HTML for the form, and creating (POSTing) a new cohort
*/

import { createCohort } from "./CohortProvider.js"


const formContainer = document.querySelector(".cohort_form")

// add an event listener to the form container
formContainer.addEventListener("click", (theEvent) => {
    // check to see if they clicked on the "Add New Cohort" button
    if (theEvent.target.id === "saveCohort") {
        // then take the values of the input fields and create a new cohort object
        const newCohort = {
            name: document.querySelector("#input_cohort-name").value
        }

        // send newly created cohort object to our database.json (baby API)
        createCohort(newCohort)
    }
})

const render = () => {
    formContainer.innerHTML = `
    <div class="form">
        <form>
            <fieldset>
                <label>Cohort Name:</label>
                <input type="text" id="input_cohort-name">
            </fieldset>
        </form>
        <button id="saveCohort">Add New Cohort</button>
    </div>
    `
}

const CohortForm = () => {
    render()
}

export default CohortForm
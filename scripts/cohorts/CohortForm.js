/*
    Responsible for creating the HTML for the form, and creating (POSTing) a new cohort
*/


const formContainer = document.querySelector(".cohort_form")

const render = () => {
    formContainer.innerHTML = `
    <div class="form">
        <form>
            <fieldset>
                <label>Cohort Name:</label>
                <input type="text" id="form_cohort-name">
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
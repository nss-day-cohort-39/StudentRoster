/*
    Responsible for respresenting an individual cohort object as HTML
*/

export const CohortHTML = (cohortObj) => {
    return `
        <div class="cohort">
            <h4>${cohortObj.name}</h4>
        </div>
    `
}
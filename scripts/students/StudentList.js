import { StudentHTML } from "./Student.js"
import { useStudents } from "./StudentProvider.js"
import { useCohorts } from "../cohorts/CohortProvider.js"

const studentContainer = document.querySelector(".student_list")

const render = () => {
    const allStudents = useStudents()
    // need access to the cohort info (NEED THE COHORT NAME!)
    const allCohorts = useCohorts()
    
    for (const singleStudent of allStudents) {
        // find the single cohort within the allCohorts array, where the cohort's id matches the singleStudent's cohortId
        const foundSingleCohort = allCohorts.find(singleCohortObj => singleCohortObj.id === singleStudent.cohortId)
        studentContainer.innerHTML += StudentHTML(singleStudent, foundSingleCohort)
    }
}

const StudentList = () => {
    render()
}

export default StudentList
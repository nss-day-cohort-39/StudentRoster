import { getCohorts } from "./cohorts/CohortProvider.js";
import { CohortList } from "./cohorts/CohortList.js";
import CohortForm from "./cohorts/CohortForm.js";
import { getStudents } from "./students/StudentProvider.js";
import StudentList from "./students/StudentList.js";

// can't do anything with the data until we get the data
getCohorts().then(CohortList)

// render the cohort form
CohortForm()

getStudents().then(StudentList)
import { getCohorts } from "./cohorts/CohortProvider.js";
import { CohortList } from "./cohorts/CohortList.js";
import CohortForm from "./cohorts/CohortForm.js";

// can't do anything with the data until we get the data
getCohorts().then(CohortList)

CohortForm()
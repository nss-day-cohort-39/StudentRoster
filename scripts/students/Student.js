export const StudentHTML = (studentObj, cohortObj) => {
    return `
        <div class="student">
            <h4>Name: ${studentObj.firstName} ${studentObj.lastName}</h4>
            <p>${cohortObj.name}</p>
        </div>
    `
}
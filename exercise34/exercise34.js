//Create a small program that contains a list of employee
//names. Print out the list of names when the program runs 
// the first time. Prompt for an employee name and remove
//that specific name from the list of names. Display the 
//remainiing employees, each on its own line 

//e.g.: 
// There are 5 employees: 
// Joan Smith
//Jackie Jackson
//Chris Jones
//Amanda Cullen
// Jeremy Goodwin

// Enter an employee name to remove: Chris Jones
// There are 4 employees 
// Joan Smith
// Jackie Jackson
//Amanda Cullen
//Jeremy Goodwin. 

function listRemoval() {
    const employeeList = ["Joan Smith", "Jackie Jackson", "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"];
    const listofNames  = alert("There are" + " " + employeeList.length + " " + "employees" + ":" + " " + employeeList);
    const employeeName = prompt("Enter an employee name to remove"); 
    const newemployeeList = employeeList.indexOf(employeeName);
        if(newemployeeList >- 1) {
            employeeList.splice(newemployeeList, 1);
        }
    return alert("There are" + " " + employeeList.length + " " + employeeList)
}







     







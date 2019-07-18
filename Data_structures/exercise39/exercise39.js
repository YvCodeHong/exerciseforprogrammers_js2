//Create a program that sorts all employees 
//by last name and prints them to the screen 
//in a tabular format. 


const employees = ["Jacquelyn Jackson", "Jake Jacobson", "John Johnson", "Michaela Michaelson",
"Sally Weber", "Tou Xiang"]; 

function lastName(names) {
    return names.map(function(name) {
        const full = name.split(" "),
            last = full.pop();
            return last + ", " + full.join(" ");
    }).sort();
}

console.log(lastName(employees));

// Write your solution in this file!
// To start, define a employee variable
//  and assign it to an Object containing name and streetAddress keys;

let employees = {
    name: "Test", 
    streetAdress: "123 Main St"
};
// updateEmployeeWithKeyAndValue(): this function should take in three
//  arguments: an employee Object, 
//  a key and a value. This function should not mutate the employee; 
//  it should return a new Object 
//  that has an updated value for the key passed in. 
//  Hint: use the spread operator!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}
//Dynamic

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    let newEmployee = {...employee} 
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}

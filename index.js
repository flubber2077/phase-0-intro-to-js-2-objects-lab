// Write your solution in this file!

let employee = {
    name: "Ben",
    streetAddress: "street"
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const copyEmployee = {...object};
    copyEmployee[key] = value;
    return copyEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let copyEmployee = {...employee};
    delete copyEmployee[key];
    return copyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
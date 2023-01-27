// Write your solution in this file!

    const employee= {
    name:"Sam", 
    streetAddress: "12 Broadway"
}

/*
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj =  {...employee}
    newObj[key] =   value
    return newObj
}
*/
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee,{[key]:value}) 

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=  value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

/*
const obj = { key: value }

const obj = {
  key1: value1,
  key2: {
    innerKey1: innerValue1,
    innerKey2: innerValue2,
  },
};
*/






//create an object using a constructor function in JavaScript?
function Person(name,age){
    this.age = age;
    this.name = name;
}
let person = new Person("abhi",32)
console.log(person.age)
//How do you create an object using prototypal inheritance in JavaScript?
let emp = {
    name : "amardeep",
    salary: 50000,
    designation:"senior developer",
    details:function(){
        return `Name is ${this.name}, Salary is ${this.salary}$ and Designation is ${this.designation}`
    }
}

let emps = Object.create(emp)
emps.jobTitle = 'Software Developer';
console.log(emp.details());

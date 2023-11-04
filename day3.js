/*closure- A closure inner func that access outer func. Closures allow you to create private variables, maintain state, and create functions with access to their parent's scope.
hey are a key mechanism for managing data encapsulation and providing a way to implement data hiding and information hiding.
function display () {
    console.log("Im outer func..")
    function show() {
        console.log("im inner func");
    }
    return show;
}

const closure =display();
closure()

function createcounter() {
    let count = 0;     //parent scope 
    function increment() {
        count++
        console.log(count)
    }
    function decrement() {
        count--
        console.log(count)

    }
    return { increment,decrement}
    //we use {} for want return multiple things.
}

const counter =createcounter();
counter.increment();
counter.decrement()
//*way of declaration and initial object in JS
object literal syntax: let object_Name = { //key-value pairs }; 
const person = {
    name:"John",
    age:35,
    city:"New York" ,
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
person.greet()
//*Constructor Function syntax: let Object_Name = new Object();
function person(firstname,lastname,age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
const Person = new person('Abhishek',"Chaurasia",2)
console.log(Person);

Class Syntax (ES6):ES6 introduced classes, which provide a more structured way to create objects and define their methods and properties:
class Person {
     constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
     }
     greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
      }
}
const person = new Person('abhi',"chaurasia",22);
person.greet()


//class

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  details() {
    console.log(
      `THE NAME IS ${this.firstName} ${this.lastName} AND THE AGE IS ${this.age}`
    );
  }
}
//TypeError: Class constructor Person cannot be invoked without 'new' means new key use karne k liye bol rh,person obj pr.
const person = new Person("ABHISHEK", "CHAURASIA", 25);
person.details();
// Inheritance:You can create subclasses that inherit from a parent class in JS
class Employee extends Person {
  details() {
    console.log(
      `THE NAME IS ${this.firstName} ${this.lastName} AND THE AGE IS ${this.age}`
    );
  }
}
const employee = new Employee("ABHI", "CHAURASIA", 26);
employee.details();

// Encapsulation:You can achieve encapsulation in JavaScript by using closures and private variables
class BankAccount {
  #balance = 0; //private variable
  constructor(accountNumber, accountHolder) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance $${this.#balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }
  withdraw(amount) {
    if (amount <= this.#balance && amount > 0) {
    console.log(this.#balance)
    console.log(amount)
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. Remaining Balance $${this.#balance}`);
    }
    else{
        console.log("Invalid withdrawal amount or insufficient balance.");
    }
  }
  getBalance(){
   return this.#balance 
  }
}
const Candidate = new BankAccount(78451236,"Abhishek");
Candidate.deposit(500);
Candidate.withdraw(400);
console.log(`Account balance:$${Candidate.getBalance()}`)
*/
// Polymorphism in JavaScript typically involves different classes or objects sharing the same method name and being able to respond to it in a way that's appropriate for their specific types.

class Employee{
    constructor(name,baseSalary){
      this.name = name
      this.baseSalary=baseSalary
    }
    calculateSalary(){
      return this.baseSalary;
    }
  }
  
  class Manager extends Employee{
    constructor(name,baseSalary,bonus){
     super(name,baseSalary);
     this.bonus = bonus
    }
    calculateSalary(){
      let totalSalary = super.calculateSalary() + this.bonus;
      return totalSalary;
    }
  }
  let manager = new Manager('Amardeep',5000,500);
  console.log(`${manager.name}'s updated salary: $${manager.calculateSalary()}`);
  let employee = new Employee("abhishek",5000);
  console.log(`${employee.name}'s updated salary: $${employee.calculateSalary()}`);
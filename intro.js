let name = "Dash"
console.log(name);

//cannot be used a reserved keyword
//cannot start with a number ex: 1name
//cannot contain a space or hyphen 
//case sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);                      //1
//now change the let to const

const interestRate = 0.3;
interestRate = 1;                               //const interestRate = 0.3
console.log(interestRate);

//if you wanna change the value of variable, use let or else const keeps the variable constant.

//primitives - strings, boolean, number, undefined and null

let indiv = "Dash"; //string literal
let age = 30;      //number liteal
let isApproved = false;  //Boolean literal
let firstName = undefined; //undefined is a value and also a data type
let selectedcolor = null; //when we wanna explicitly clear the value of the variable, to change to some value in future

//reference types- objects, array and functions
//object in here is just like the onbjects in the real world
/**let name = 'Dash';
let age = 30;**/    //we dont really need this but just for reference
let person = {
    //we can add properties or keys here
    name = 'Dash'
    age = 30,
};
//2 ways to work with the properties
//1st way - Dot notation
person.name = 'John';
//2nd way - Bracket notation
person['name'] = 'Mary';
//or
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//array- used to store the items stored in the shopping cart, real world example
//used to represent list of items
let selectedColors = ['red', 'blue'];
//to add or change the already existing values in the array use the following statement
selectedColors[2] = 1;    //[]is the position where you need the change to occur
console.log(selectedColors);

//functions - set of statements used to caluculate or that perform a task function task(variable/parameter){console.log();} task('argument');
//performing a task
function greet(name) {
    console.log("Hello pom pom " + name);  //look out for spaces while concocting
}
greet('Ram'); //Hello pom pom Ram
//caluculating a value
function square(number) {
    return number * number;
}
console.log(square(2));

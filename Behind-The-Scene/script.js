'use strict';

// function calcAge(birthYeah) {
//     const age = 2037 - birthYeah;

//     function printAge() {
//         const output = `${firstName},You are ${age},born in ${birthYeah}`;
//         console.log(output);

//         if (birthYeah >= 1981 && birthYeah <= 1996) {
//             var millenial = true;

//             //Creating  NEW variable with same name as outer scope's varible
//             const firstName = 'Steven';

//             const str = `Oh,and you're a millenial,${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             const output = 'New Output';

//         }
//         // console.log(str);
//         console.log(millenial);
//         // add(2, 3);           //we get output of we remove the strict mode
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// // printAge();

//////////////////////////////////////////////////////////

// //Variables
// console.log(me);
// console.log(job);   //Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

//Example

/*if (!numProducts) deleteShoppingCart(); //here the output is 'All products deleted' coz at this particular line the value is not u=yet  given

var numProducts = 10;

function deleteShoppingCart() {
    console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);    //variables declared with var creates a property on the global window object ,check at window(@ console)
console.log(y === window.y);
console.log(z === window.z);*/

//////////////////////////////

// console.log(this);      //global scope - window object

// const calcAge = function (birthYeah) {
//     console.log(2037 - birthYeah);
//     console.log(this);  //didnt attach to any object / simply no owner in this case
// }
// calcAge(1991);

// const calcAgeArrow = (birthYeah) => {
//     console.log(2037 - birthYeah);
//     console.log(this);  //uses parent's scope i.e windows
// }
// calcAgeArrow(1991);

/*const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const nutella = {
    year: 2017,
};
nutella.calcAge = jonas.calcAge;
nutella.calcAge();

const f = jonas.calcAge;
f();    //error occurs because f() is calling the function jonas.calcAge without a proper this context.*/

/*const jonas = {
    year: 1991,
    firstName: 'Jonas',
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () => {
        console.log(`Hey! ${this.firstName}`);  //arrow uses parent's scope i.e global scope here
    },
};
jonas.greet();
console.log(this.firstName);*/

//Var shouldn't be used here

// var firstName = 'Matilla';
// const jonas = {
//     year: 1991,
//     firstName: 'Jonas',
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey! ${this.firstName}`);  //arrow uses parent's scope i.e Matilla by var
//     },
// };
// jonas.greet();
// console.log(this.firstName);

/*
// const jonas = {
//     year: 1991,
//     firstName: 'Jonas',
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);

//         const isMillenial = function () {
//             console.log(this);  //ERROR: 'this' is undefined
//             //isMillenial() is a regular function call (not a method of jonas).
//             //Solution: Use an Arrow Function
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },
//     greet: () => {
//         console.log(`Hey! ${this.firstName}`);  //arrow uses parent's scope i.e global scope here
//     },
// };
// jonas.greet();
// jonas.calcAge();

//Solution
const jonas = {
    year: 1991,
    firstName: 'Jonas',
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        //Solution 1
        // const self = this;  //self or that workaround

        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        //Solution 2
        const isMillenial = () => {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        isMillenial();
    },
    greet: () => {
        console.log(`Hey! ${this.firstName}`);  //arrow uses parent's scope i.e global scope here
    },
};
jonas.greet();
jonas.calcAge();*/


/*const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 2);
console.log(addExpr(2, 3, 4, 5, 5));

var addArrow = (a, b) => {
    console.log(arguments); //gives error
    //Arrow functions do NOT have their own arguments object.
    a + b
};
addArrow(2, 3, 4);*/

/*//primitives vs objects(reference types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('me', me);*/

/*//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
//Both gives the same output coz,the marriedJessica dont create a new object in the heap

//Copying object
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Barney'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Robin');
jessicaCopy.family.push('Ted Mosby');
//Here the lastname was changed but family(array) are same in both,it is changed even in the first
//So we do the deepClone (using external libraries)*/
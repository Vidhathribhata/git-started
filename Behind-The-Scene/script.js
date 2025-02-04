// 'use strict';

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


//--------------------------------------------------------
// // The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();


// ///////////////////////////////////////
// // Regular Functions vs. Arrow Functions
// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);


// ///////////////////////////////////////
// // Object References in Practice (Shallow vs. Deep Copies)

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = marryPerson(jessica1, 'Davis');

// // const marriedJessica = jessica1;
// // marriedJessica.lastName = 'Davis';

// console.log('Before:', jessica1);
// console.log('After:', marriedJessica);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   familiy: ['Alice', 'Bob'],
// };

// // Shallow copy
// const jessicaCopy = { ...jessica };
// jessicaCopy.lastName = 'Davis';

// // jessicaCopy.familiy.push('Mary');
// // jessicaCopy.familiy.push('John');

// // console.log('Before:', jessica);
// // console.log('After:', jessicaCopy);

// // Deep copy/clone
// const jessicaClone = structuredClone(jessica);
// jessicaClone.familiy.push('Mary');
// jessicaClone.familiy.push('John');

// console.log('Original:', jessica);
// console.log('Clone:', jessicaClone);
// */

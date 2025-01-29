// let js = "amazing";
// // if (js === 'amazing') alert('javaScript is FUN!');
// console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
// console.log(23);

// //Values and variables
// let firstName = "Bob";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Teacher";


// //Data Types and comments

// let fistName = 'John';

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
// console.log(typeof "Jonas");

// javascriptIsFun = 'Yes';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);       //error or bug


//let const var
// let age = 30;
// age = 31;

// const age1 = 15;
// // age1 = 16;               //Typeerror
// //const job;                 //Typeerror

// var job = 'programmer';
// job = 'teacher';

// //Basic Operator
// const now = 2037;
// const ageJonas = now - 1990;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //2 ** 3 MEANS 2 power 3

// const firstName = 'Jonas';
// const lastName = 'Dany';
// console.log(firstName + " " + lastName);

// //Assignment operator
// let x = 10 + 5;
// x += 10;        //+= means x=x+10
// console.log(x);
// x--;
// console.log(x);
// x++ + ++x;
// console.log(x);

// //Comparision operator
// console.log(ageJonas > ageSarah);
// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18

// console.log(now - 1991 > now - 2018);

//refer mdn operator precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;    //x = y = 10; ,first y=10 , then y = x so x = 10
// console.log(x, y);

// // const avgAge = ageJonas + ageSarah / 2;   //first division later addition
// const avgAge = (ageJonas + ageSarah) / 2;   //first addition coz of bracket later division

// console.log(ageJonas, ageSarah, avgAge);

//Task 1
// let massOfMark = 78;
// let heightOfMark = 1.7;

// let massOfJohn = 88;
// let heightOfJohn = 1.8;

// const BMIJohn = massOfJohn / heightOfJohn ** 2;
// const BMIMark = massOfMark / (heightOfMark ** heightOfMark);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIJohn, BMIMark, markHigherBMI);

// //String and template literals
// const firstName = "Dhathri";
// const job = "student";
// const birthYear = 2000;
// const year = 2020;
// // const d3 = "I'm " + firstName + ',a ' + (year - birthYear) + " years old " + job + "!";
// const d3 = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
// console.log(d3);

// const dhathri = `I'm ${firstName}`;
// console.log(dhathri);

// console.log(`Just a regular string...`);
// console.log(`String with \n\multiple \n\lines`);

//Taking decisions if-else
// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`sarah can start driving lisence`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait another ${yearsLeft} years `);
// }

// const birthYear = 2012;
// let centuary;
// if (birthYear <= 2000) {
//     centuary = 20;
// } else {
//     centuary = 21;
// }
// console.log(centuary); 
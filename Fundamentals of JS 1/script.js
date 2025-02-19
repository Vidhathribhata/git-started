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

//Coding Challenge 2
// let massOfMark = 78;
// let heightOfMark = 1.7;

// let massOfJohn = 88;
// let heightOfJohn = 1.8;

// const BMIJohn = massOfJohn / heightOfJohn ** 2;
// const BMIMark = massOfMark / (heightOfMark ** heightOfMark);

// const markHigherBMI = BMIMark > BMIJohn;

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

//Type conversion (manual conversion)

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));       //cant convert hence NaN
// console.log(typeof NaN);

// console.log(String(23), 23);

// coercion    (automatic conversion)

// console.log('Iam ' + 23 + ' years old');         //+ is a coercion
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * 23);

//Guess
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// let n = '10' - '4' - '3' - 2 + '5';
// let n = '10' - '4' - '3' - 8 + '5';
// console.log(n);

//Truthy and Falsy values
//Falsy values :  will be false when we try to convert it to a boolean
//5 Falsy values : 0, '', undefined, null , NaN
//Other than these values are truthy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log(`Don't spend it all!`);
// } else {
//     console.log(`You should get a job!`);   //0 is a falsy value
// }

// let height;
// if (height) {
//     console(`YAY! Height is defined`);
// } else {
//     console.log(`Height is undefined`);'18' == 18;

// }

//Equality Operators: == VS ===
// const age = 18;
// if (age === 18) console.log(`You just became an adult :D (strict)`);
// //'18' == 18;           //returns true, type coercion
// //'18' === 18;          //returns false, doesnt perform type coercion
// if (age == 18) console.log(`You just became an adult :D (loose)`);

// let favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof (favourite));

// if (favourite === 12) { //12 is a string here so, === not applicable
//     console.log(`Cool! 12 is an amazing number`)
// }

// let favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof (favourite));

// if (favourite === 12) {
//     console.log(`Cool! 12 is an amazing number`)
// } else if (favourite === 0) {
//     console.log(`0 is a coolest number ever!`)
// } else {
//     console.log(`${favourite} is a cool number!`);
// }

// if (favourite !== 12) console.log(`Why not 23!`);

// //Boolean logic : AND , 0R ,NOT OPERATORS
// //Logial operators
// const hasDrivingLisence = true; //A
// // const hasGoodVision = true;     //B
// const hasGoodVision = false;     //B

// console.log(hasDrivingLisence && hasGoodVision);
// console.log(hasDrivingLisence || hasGoodVision);
// console.log(!hasDrivingLisence);

// // const shouldDrive = hasDrivingLisence && hasGoodVision;

// // if (shouldDrive) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Someone should drive...`);
// // }

// const isTired = true;   //C
// console.log(hasDrivingLisence || hasGoodVision || isTired);
// console.log(hasDrivingLisence && hasGoodVision && isTired);

// const shouldDrive = hasDrivingLisence && hasGoodVision;

// if (shouldDrive && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone should drive...`);
// }

//Coding challenge 3
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins === scoreKoalas) {
//     console.log(`Draw!`);
// } else if (scoreDolphins > scoreKoalas) {
//     console.log(`The winner is Dolphins !`);
// } else {
//     console.log(`The winner is Koalas`);
// }

//Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins === scoreKoalas) {
//     console.log(`Draw!`);
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`The winner is Dolphins !`);
// } else if (scoreKoalas >= scoreDolphins && scoreKoalas >= 100) {
//     console.log(`The winner is Koalas`);
// }

//Bonus 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Draw!`);
// } else if (scoreDolphins > scoreKoalas) {
//     console.log(`The winner is Dolphins !`);
// } else {
//     console.log(`The winner is Koalas`);
// }

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`The winner is Dolphins !`);
// } else if (scoreKoalas >= scoreDolphins && scoreKoalas >= 100) {
//     console.log(`The winner is Koalas`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Draw!`);
// } else {
//     console.log(`No one wins`)
// }

//Switch statement

// const day = 'wednesday';
// switch (day) {
//     case 'monday':
//         console.log(`Plan course structure`);
//         console.log(`Going to Music Class`);
//         break;
//     case 'tuesday':
//     case 'wednesday':
//         console.log('Watching thoery videos');
//         break;
//     case 'thursday':
//         console.log(`Editing videos`);
//         break;
//     case 'friday':
//         console.log(`Watching movies`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoing the weekend`);
//         break;
//     default:
//         console.log(`Not a valid day1`);
// }

//const day = 'friday';
// if (day === 'monday') {
//     console.log(`Plan course structure`);
//     console.log(`Going to Music Class`);
// } else if (day === 'tuesday' || day === 'wednesday') {
//     console.log('Watching thoery videos');
// } else if (day === 'thursday') {
//     console.log(`Editing videos`);
// } else if (day === 'friday') {
//     console.log(`Watching movies`);
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoing the weekend`);
// } else {
//     console.log(`Not a valid day1`);
// }

//Statements and expressions
// 3 + 4
// 1991
// true && false && !false     //expression

// if (23 > 10) {
//     const str = '23 is bigger'; //statement
// }

// const me = 'Divya';
// console.log(`I'm ${2037 - 2017} years old ${me}`);

//Conditional (ternary) operator
// const age = 23;
// age >= 18 ? console.log(`I love to travel alone`) : console.log(`I love to travel with friends`);

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'Wine';
// } else {
//     drink2 = 'Water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`); //ternory operatory is perfect while taking quick decision (here)

//Coding challenge 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement  (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300

*/
// const bill = 430    //275,40,430
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill},the tip was ${tip},and the total value is ${bill + tip}`);

// console.log(tip);   //bill <= 300 && bill >= 50  fasle for 40, 430S

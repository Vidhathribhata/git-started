// 'use strict';           //at the begining

// let hasDriversLisence = false;
// const passTest = true;

// if (passTest) hasDriversLisence = true;
// if (hasDriversLisence) console.log(`I can Drive`);

// // const interface = 'Audio';
// // const private = 234;

//Function

// function logger() {
//     console.log(`My name is Dhathri`);
// }

// logger();       //invoking /calling /running the function
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// let fruitJuice = fruitProcessor(2, 0);
// console.log(fruitJuice);

// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// //function declarations vs expressions
// //Function declaration
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }
// const age1 = calcAge1(2017);

// //Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(2000);

// console.log(age1, age2);

//Arrow function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Bob'));
// console.log(yearsUntilRetirement(1999, 'Barny'));

//Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
//     // return `${firstName} retires in ${retirement} years`;
//     if (retirement > 0) {
//         console.log(`${firstName} has already retired`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins > 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
//     } else {
//         console.log("No team wins!");
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// //test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


//Arrays
// const friend1 = "Dany";
// const friend2 = "Candy";
// const friend3 = "Suzi";

// const friends = ["Dany", "Candy", "Suzi"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jack";
// console.log(friends);

// // friends = ["Bob", "Jay"];

// const firstName = "Jonas";
// const jonas = [firstName, "Nick", 2037 - 2017, friends];
// console.log(jonas);
// console.log(jonas.length);

//Exercise
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2023];

// // console.log(calcAge(years));  //it doesnt work since calcAge requires only one value not an array
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// // const age = [age1, age2, age3];
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// //Basic array operations (methods)
// const friends = ["Dany", "Candy", "Suzi"];
// //Add elements
// const newLength = friends.push("Jay");              //Last
// console.log(friends);
// console.log(newLength);     //coz push returns new length i.e 4

// const newLength2 = friends.unshift('John');         //first
// console.log(friends);
// console.log(newLength2);

// //Remove elements
// friends.pop();                                      //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift()                                     //First
// console.log(friends);

// console.log(friends.indexOf("Candy"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Candy"));
// console.log(friends.includes("Bob"));

// friends.push(23);
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Peter")) {
//     console.log("You have a friend named Peter");
// }

// if (friends.includes("Candy")) {
//     console.log("You have a friend named Candy");
// }

//Coding Challenge 2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)
*/

// const calcTip = (value) => {
//     if (value >= 50 && value <= 300) {
//         const tip = value * 0.15;
//         return tip;

//     } else {
//         const tip = value * 0.2;
//         return tip;
//     }
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

//Objects
// const demoArray = [
//     'Demo',
//     'Random',
//     2037 - 2017,
//     'teacher',
//     ['Tony', 'Steve', 'Natasha']
// ];
// const marvel = {
//     firstName: 'Tony',
//     lastName: 'Stark',
//     age: 2037 - 1991,
//     job: 'inventor',
//     friends: ['Bruce', 'James', 'Natasha']
// };

// //Dot vs Bracket Notation

// console.log(marvel);
// console.log(marvel.lastName);
// console.log(marvel['lastName']);

// const nameKey = 'Name';
// console.log(marvel['first' + nameKey]);
// console.log(marvel['last' + nameKey]);

// // console.log(marvel.'last' + nameKey);

// // const interestedIn = prompt('What do you want to know about Marvel ? Choose between firstName,lastName,age,job,and friends');
// // // console.log(marvel.interestedIn);    //undefined
// // // console.log(marvel[interestedIn]);

// // if (marvel[interestedIn]) {
// //     console.log(marvel[interestedIn]);
// // } else {
// //     console.log('Wrong request');
// // }

// // marvel.location = 'California';
// // marvel['twitter'] = '@marvelworld';
// // console.log(marvel);

// //Challenge 2.1
// "tony has 3 friends, and his best friend is called Bruce"
// console.log(`${marvel.firstName} has ${marvel.friends.length} friends,and his best friend is called ${marvel.friends[0]}`);     //marvel.friends.length is a compted member access (left to right)

//Object methods
// const marvel = {
//     firstName: 'Tony',
//     lastName: 'Stark',
//     birthYeah: 2017,
//     age: 2037 - 1991,
//     job: 'inventor',
//     friends: ['Bruce', 'James', 'Natasha'],
//     hasDriveLisence: true,

//     // calAge: function (birthYeah) {           //(*)
//     //     return 2037 - birthYeah;
//     // }

//     // calAge: function () {                    //(**)
//     //     console.log(this);
//     //     return 2037 - this.birthYeah;
//     // }

//     calAge: function () {                       //(***)
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calAge()}-year old ${this.job} ,and he has ${this.hasDriveLisence ? 'a' : 'no'} driver's lisence`
//     }
// };
// //Any function that is attached to the object is called method
// //Function expression is used not declararion

// // console.log(marvel.calAge(2017));            //(*)
// // console.log(marvel['calAge'](2017));

// //console.log(marvel.calAge(birthYeah));        //error //(**)
// // console.log(marvel.calAge());

// console.log(marvel.age);                        //(***)

// //Challenge 2.2
// //"tony is a 46-year old inventor, and he has a driver's lisence"
// console.log(marvel.getSummary());


// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// console.log(mark.calcBMI());

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }
// console.log(john.calcBMI());

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

//Loops
// console.log('Lifting weights repetution 1');
// console.log('Lifting weights repetution 2');
// console.log('Lifting weights repetution 3');
// console.log('Lifting weights repetution 4');
// console.log('Lifting weights repetution 5');
// console.log('Lifting weights repetution 6');

// for (let rep = 1; rep <= 10; rep++) {
//     console.log('Lifting weights repetution ${rep}');

// }

//Looping array , breaking ,continue
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     //Reading from jonas array
//     console.log(jonas[i], typeof (jonas[i]));

//     //Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// //-----------
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//Continue and break
//continue :exits current iteration and continues next

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// console.log(`------- ONLY STRINGS--------`);
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue
//     console.log(jonas[i], typeof (jonas[i]));
// }

// console.log(`------- BREAK WITH NUMBERS--------`);
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break
//     console.log(jonas[i], typeof (jonas[i]));
// }

//Looping backwords and looping in the loop

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-----------Starting exercisee ${exercise}`);
//     for (let rep = 1; rep <= 6; rep++) {
//         console.log(`Lifting weight repetution ${rep}`);
//     }
// }

//While loop

// let rep = 1;
// while (rep <= 10) {
//     console.log('Lifting weights repetution ${rep}');
//     rep++;
// }

// let dice = Math.random() * 6 + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6 + 1);
//     if (dice === 6) {
//         console.log(`Loop is about to end`);
//     }
// }

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

*/
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2, 2, 2]));
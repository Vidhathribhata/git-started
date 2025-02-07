'use strict';

/*// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

*/

////////////////////////////////////////

/*// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring  ~(unpacking)
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(first, secondary);

let [main, , secondary] = restaurant.categories;  //second element is skipped 
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main)
//Instead of above the below destructioring is much simpler
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from ffunctions
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
// //  To extract seperate
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default values 
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);                     //used as a savior */

//////////////////////////////////////////////////////////

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivary: function ({ starterIndex = 1, mainIndex = 0, time = '20 :00', address }) {
//     console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delecious pasta with ${ing1},${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngrediant, ...otherIngrediants) {  //rest
//     console.log(mainIngrediant);
//     console.log(otherIngrediants);
//   }
// };

// restaurant.orderDelivary({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //Here it takes the default values
// restaurant.orderDelivary({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,

// });

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinatch');
// restaurant.orderPizza('mushroom');

/////////////////////////////////////////////////////////////////

// const ingrediants = [prompt("Let\s make pasta! Ingrediant 1?"),
// prompt('Ingrediant 2 ?'),
// prompt('Ingrediant 3 ?'),
// ];
// console.log(ingrediants);

// // restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
// //Or
// restaurant.orderPasta(...ingrediants);

//Objects
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'guiseppe' };
// console.log(newRestaurant);

// const restuarantCopy = { ...restaurant };
// restuarantCopy.name = 'Ristorante Roma';
// console.log(restuarantCopy);
// console.log(restaurant.name);

// //Destructuring the objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //We have to refer the property names otherwise the identification is impossibile
// const { name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// // menu = []: This means you're trying to extract a property named menu from restaurant. If menu doesn't exist in the restaurant object, it will default to an empty array [].

// // starterMenu: starters = []: This means you're extracting the starterMenu property from restaurant and renaming it to starters. If starterMenu is not found, starters will default to an empty array []

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);   //{ a, b } = obj gives error
// console.log(a, b);


// //nested objects
// const { fri } = openingHours;
// console.log(fri);
// //OR
// const { fri: { open, close } } = openingHours;
// console.log(open, close);
// //OR
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// //Spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// //Instead 
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// //Seperate
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);


// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// //spread operator is similar to structuring

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables arrays,strings ,maps ,sets.NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} blblblb`);   //Error ,its not a place which expects multiple values sepearated by comma,that is expected only when we pass arguments.


// //Rest Operator
// //SPREAD, because on RIGHT side of =
// //to unpack elements from an array or object
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of = 
// //collect the remaining elements into a new array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //Skipping in Array Destructuring
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //Objects
// //Skipping in Object Destructuring
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays)
// //to separate one property (sat) from the restaurant.openingHours object and collect the remaining properties into a new object.


//Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   } console.log(sum);

// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

/////////////////////////////////////////////
// console.log('-------OR---------');
// //They can use any data type,return any data type,short-circuting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');     //output : Jonas coz '' is a falsy value
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || null || '' || 'Hello' || 23);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// //act as default values

// console.log('-------AND---------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Jonas' && 7);  //returns last value if it is truthy
// console.log('Jonas' && 23 && null && 'hello');

// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinatch');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinatch');

/////////////////////////////////////////////////////

// //The nulllish collashing operator(??)
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //Nullish: null and undefined  (NOT 0 or '')
// //The Nullish Coalescing Operator returns the right-hand value only if the left-hand value is null(false) or undefined.
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/*//Logical assignment operator
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,

};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rozi',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';   //returns owner undefined
//If rest1.owner is falsy, assign the falsy value (like undefined, null, 0, '').
rest1.owner &&= '<ANONYMOUS>';      //If rest1.owner is falsy, it remains unchanged.

rest2.owner = rest2.owner && '<ANONYMOUS>';
//The string '<ANONYMOUS>' in your code is just a placeholder value that is assigned when rest1.owner is truthy.

console.log(rest1);
console.log(rest2); */

///////////////////////////////////////
/*// Coding Challenge #1

We're building a football betting app (soccer for my American friends )!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored


/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

5
const { odds: { team1, x: draw, team2 } } = game
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);


//7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);
*/

//For of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   // console.log(`${item[0] + 1}: ${item[1]}`);
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(...menu.entries());

/////////////////////////////////////////////////
//Enhanced object literals

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  // thu: {
  //   open: 12,
  //   close: 22,
  // },
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES56 enhanced i=object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivary: function ({ starterIndex = 1, mainIndex = 0, time = '20 :00', address }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1},${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngrediant, ...otherIngrediants) {  //rest
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  }
};

//Here property mon is absent 
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With optional chain
//If mon exists, it will access the open property. which prevents error and gives undefined instead
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.open)

/*//Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'METHOD DOES NOT EXIST');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'METHOD DOES NOT EXIST');

//Arrays
const users = [
  {
    name: 'jonas',
    email: 'jonas@gmail.com',
  }
];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty;')*/

/////////////////////////////////
//Looping object:object keys,values and entris

// //Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;

// // for (const day of Object.keys(openingHours)) {
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);


// //Property values
// const values = Object.values(openingHours);
// console.log(values);


// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// //Here below first is the key and the second is he value
// //[key,value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1


// for (const [i, Player] of game.scored.entries()) {
//   console.log(`Goal ${i} : ${Player}`);
// }

// //2
// let avg = 0;
// for (const odd of Object.values(game.odds)) {
//   avg += odd;
// }
// avg /= Object.keys(game.odds).length;
// console.log(avg);

// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${team}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

//////////////////////////////////////////
//Sets  --Unique

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotta',
//   'Guoccamoli'
// ]);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Risotta'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread'); // Duplicate, but Set removes it
// console.log(orderSet);
// orderSet.delete('Risotta');
// console.log(orderSet);
// console.log(orderSet[0]);   //undefined ,set has no indexes
// // orderSet.clear();
// console.log(orderSet);

// //Sets are iterable
// for (const order of orderSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chief', 'Waiter', 'Manager', 'Chief', 'Waiter'];
// const staffUnique = new Set(staff);
// // const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chief', 'Waiter', 'Manager', 'Chief', 'Waiter']).size);

// console.log(new Set('vidhathribhat'));

//////////////////////////////////////////////
//Maps it stores different types such as objects,array etc

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 2;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest);
// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);

// //size
// console.log(rest.size);

// // const arr = [1, 2];
// // rest.set([1, 2], 'Test');
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get([1, 2]));    //this is not asa same as the above araray in the heap

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));    //Now it works

// rest.set(document.querySelector('h1'), 'Heading');    //h1 is the key
// console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Maps are iterable
//key,value  ..i.e destructure
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3   //prompt(`Your answer`);
console.log(answer);

console.log(question.get(question.get('correct') === Number(answer)));

//Covert Map to array

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
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
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
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
    },

    order: function (starterIndex, mainIndex) {
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

restaurant.orderDelivary({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

//Here it takes the default values
restaurant.orderDelivary({
    address: 'Via del Sole, 21',
    starterIndex: 1,

});

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinatch');
restaurant.orderPizza('mushroom');

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

'use strict';
// const country = 'Brazil';
// const continent = 'South America';
// const isIsland = false;
// const language = 'Portuguese';
// let population = 220;

// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`Our country ${country} is a perfect fit for you! 🤩`);
// } else {
//     console.log(`Unfortanely, ${country} is not a good match for your needs`);
// }

// let finlandPopulation = 6;
// let halfPopulation = population / 2 ;
// let awayFromAverage = Math.abs(population - 33);
// population++

// console.log(halfPopulation);
// console.log(population > finlandPopulation);
// console.log(population <= 33);

// const description = `${country} is in ${continent} and it's approximately ${population} million people speaking ${language}`;

// console.log(population);
// console.log(description)

// if (population > 33) {
//     console.log(`Brazil is ${awayFromAverage} million people above the average`);
// } else {
//     console.log(`Brazil is ${awayFromAverage} million people below the average`);
// }

// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> False
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// const numNeighbours = Number(prompt('Quantas fronteiras com países seu país tem?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border! 😮');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border 😎');
// } else {
//     console.log('No borders 😪')
// }

// const firstScoreDolphins = 760;
// const secondScoreDolphins = 18;
// const thirdScoreDolphins = 89;

// const firstScoreKoalas = 760;
// const secondScoreKoalas = 18;
// const thirdScoreKoalas = 89;

// const averageScoreDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
// const averageScoreKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;

// if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
//     console.log('Both win the trophy 🏆!');
// } else if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//     console.log('Dolphins team wins the trophy 🏆!');
// } else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100){
//     console.log('Koalas team wins the trophy 🏆!');
// } else {
//     console.log('Seems like no one was worth the trophy 🙁');
// }

// const language = 'portuguese';

// switch(language) {
//    case 'chinese':
//    case 'mandarin':
//         console.log('MOST number of native speakers!');
//          break
//    case 'spanish':
//         console.log('2nd place in number of native speakers');
//          break
//    case 'english':
//         console.log('3th most spoken language');
//          break
//    case 'hindi':
//         console.log('4th place 😮');
//          break
//    case 'arabic':
//         console.log('5th place in the rank!');
//          break
//    default:
//         console.log('Although this language is not in the top 5 rank, its still a great language!');
// }

// const population = 220;
// console.log(`Brazil's population is ${population > 33 ? 'above' : 'below'} average`)

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill / 20 * 3 : bill / 5;
// const totalValue = bill + tip;

// console.log(`The bill was ${bill} and the tip was ${tip}, and the total charge is $${totalValue}`);

// function describeCountry(countryName, countryPopulation, countryCapital) {
//   return `${countryName} has ${countryPopulation} million people, and its capital city is ${countryCapital}!`;
// }

// const brazilDescription = describeCountry('Brazil', 220, 'Brasilia');
// const finlandDescription = describeCountry('Finland', 6, 'Helsinki');
// const canadaDescription = describeCountry('Canada', 40, 'Ottawa');

// console.log(
//   brazilDescription + '\n' + finlandDescription + '\n' + canadaDescription
// );
// x/100 * 8 = 2  --> x = 25
// x/100 * 7900 = population --> x = population / 79

// function percentageOfTheWorld1(country, population) {
//   const countryPercentage = (population / 79).toFixed(1);
//   return `${country} has ${population} million people, this represents ${countryPercentage}% of the global population`;
// }

// const chinaPercentage1 = percentageOfTheWorld1(1441);
// console.log(chinaPercentage1);

// const indiaPercentage1 = percentageOfTheWorld1(1380);
// console.log(indiaPercentage1);

// const unitedStatesPercentage1 = percentageOfTheWorld1(331);
// console.log(unitedStatesPercentage1);

// const percentageOfTheWorld2 = function (population) {
//   return `This populations represents ${(population / 79).toFixed(
//     1
//   )}% of the global population`;
// };

// const chinaPercentage2 = percentageOfTheWorld2(1441);
// console.log(chinaPercentage2);

// const indiaPercentage2 = percentageOfTheWorld2(1380);
// console.log(indiaPercentage2);

// const unitedStatesPercentage2 = percentageOfTheWorld2(331);
// console.log(unitedStatesPercentage2);

// console.log(percentageOfTheWorld3(7900));

// const describeCountry = (country, population) =>
//   console.log(percentageOfTheWorld1(country, population));

// describeCountry('China', 1441);

// const calcAverage = (firstScore, secondScore, thirdScore) =>
//   (firstScore + secondScore + thirdScore) / 3;

// const averageScoreDolphins = Number(calcAverage(85, 54, 521).toFixed(0));
// const averageScoreKoalas = Number(calcAverage(23, 324, 27).toFixed(0));

// const checkWinner = function (avgDolphin, avgKoalas) {
//   if (avgDolphin >= avgKoalas * 2) {
//     console.log(
//       `Dolphins' team is the winner! ${avgDolphin} vs. ${avgKoalas} 🏆`
//     );
//   } else if (avgKoalas >= avgDolphin * 2) {
//     console.log(
//       `Koalas' team is the winner! ${avgKoalas} vs. ${avgDolphin} 🏆`
//     );
//   } else {
//     console.log(`No one wins 😥`);
//   }
// };

// checkWinner(averageScoreDolphins, averageScoreKoalas);

// const percentageOfTheWorld = (population) =>
//   `This populations represents ${(population / 79).toFixed(
//     1
//   )}% of the global population`;

// const populations = [1441, 220, 6, 60];
// const isThereFour =
//   populations.length === 4 ? `It HAS 4 elements 🤩` : `It hasn't 4 elements 😐`;

// console.log(isThereFour);

// const percentages = [
//   percentageOfTheWorld(populations[0]),
//   percentageOfTheWorld(populations[1]),
//   percentageOfTheWorld(populations[2]),
//   percentageOfTheWorld(populations[populations.length - 1]),
// ];

// console.log(percentages);

// const neighbours = ['Denmark', 'Poland', 'Austria', 'Switzerland'];
// neighbours.push('Utopia');

// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// neighbours.unshift('Germany');
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('Austria')] = 'Russia';
// console.log(neighbours);

// 1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// 2. And now let's use arrays! So, create an array called bills containing the test data below.

// 3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// 1. Create an object called myCountry for a country of your choice, containing properties country, capital, language, population -in millions- and neighbours (an array like we used in previous assignments).

// 2 Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// 3 Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

// const myCountry = {
//   country: 'Brazil',
//   capital: 'Brasilia',
//   language: 'Portuguese',
//   population: 220,
//   neighbours: [
//     'Argentina',
//     'Bolivia',
//     'Colombia',
//     'Guyana',
//     'Suriname',
//     'Venezuela',
//     'French Guiana',
//     'Peru',
//     'Paraguay',
//   ],
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// 1. Write "Jonas has 3 friends, and his best friend is called michael" but without hardcoding it, get it from an object, all those information

// const jonas = {
//   firstName: 'Jonas',
//   friends: ['Michael', 'Bob', 'Richard'],
// };

// const jonasMessage = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
// console.log(jonasMessage);

// Challenge: Jonas is a 46-year old teacher, and he has (or not) a driver's license.

// const currentYear = 2025;

// const jonas = {
//   firstName: 'Jonas',
//   birthYear: 2000,
//   job: 'teacher',
//   driverLicense: true,
//   calcAge: function () {
//     return currentYear - this.birthYear;
//   },
//   get age() {
//     return this.calcAge();
//   },

//   getSummary: function () {
//     const jonasInfo = `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.driverLicense ? 'a' : 'no'} driver's license!`;

//     console.log(jonasInfo);
//   },
// };

// jonas.getSummary();

// 1. Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// 2. Call the describe method.

// 3. Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// const myCountry = {
//   country: 'Brazil',
//   capital: 'Brasilia',
//   language: 'Portuguese',
//   population: 220,
//   neighbours: [
//     'Argentina',
//     'Bolivia',
//     'Colombia',
//     'Guyana',
//     'Suriname',
//     'Venezuela',
//     'French Guiana',
//     'Peru',
//     'Paraguay',
//   ],

//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = !this.neighbours.length > 0 ? true : false;
//     return this.isIsland;
//   },
// };

// myCountry.describe();
// myCountry.checkIsland();

// console.log(myCountry.isIsland);

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// 2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = Number((this.mass / this.height ** 2).toFixed(1));
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = Number((this.mass / this.height ** 2).toFixed(1));
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (mark.bmi === john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is the same as ${john.fullName}'s (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

//                    Iteration: The for Loop

// 1. There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

// for (let voters = 1; voters <= 50; voters++) {
//   console.log(`Voter number ${voters} is currently voting! 😁`);
// }

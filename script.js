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

// const percentageOfTheWorld3 = (population) =>
//   `This populations represents ${(population / 79).toFixed(
//     1
//   )}% of the global population`;

// console.log(percentageOfTheWorld3(7900));

// const describeCountry = (country, population) =>
//   console.log(percentageOfTheWorld1(country, population));

// describeCountry('China', 1441);

const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

const averageScoreDolphins = Number(calcAverage(85, 54, 521).toFixed(0));
const averageScoreKoalas = Number(calcAverage(23, 324, 27).toFixed(0));

const checkWinner = function (avgDolphin, avgKoalas) {
  if (avgDolphin >= avgKoalas * 2) {
    console.log(
      `Dolphins' team is the winner! ${avgDolphin} vs. ${avgKoalas} 🏆`
    );
  } else if (avgKoalas >= avgDolphin * 2) {
    console.log(
      `Koalas' team is the winner! ${avgKoalas} vs. ${avgDolphin} 🏆`
    );
  } else {
    console.log(`No one wins 😥`);
  }
};

checkWinner(averageScoreDolphins, averageScoreKoalas);

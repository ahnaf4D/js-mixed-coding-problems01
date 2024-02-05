function randomInteger(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// user input below
const startFrom = 10;
const endAt = 20;
const randInt = randomInteger(startFrom , endAt);
console.log(randInt);
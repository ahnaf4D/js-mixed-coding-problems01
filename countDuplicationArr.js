function countDuplicationArr(arrays, findnumber) {
    let countDuplicates = 0;
    for (const element of arrays) {
        if (element === findnumber) {
            countDuplicates++;
        }
    }
    return countDuplicates;
}
const numbers = [5, 6, 11, 12, 98, 5, 6, 6, 6];
console.log(countDuplicationArr(numbers, 6));

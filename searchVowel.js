function countVowel(str) {
    const vowels = 'aeiouAEIOU';
    let countVowels = 0;
    for (const element of str) {
        if (vowels.includes(element)) {
            countVowels++;
        }
    }
    return countVowels;
}
const commit = "I am determined. I am Hard working . I am becomming a web developer";
console.log(countVowel(commit));
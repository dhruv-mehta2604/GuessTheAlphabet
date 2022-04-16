function genRandAlpha() {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

var arrOne = [
    ['!', '!', '!'],
    ['!', '!', '!']
];
var arrTwo = [
    ['!', '!', '!'],
    ['!', '!', '!'],
    ['!', '!', '!']
];
var arrThree = [
    ['!', '!', '!', '!'],
    ['!', '!', '!', '!'],
    ['!', '!', '!', '!'],
    ['!', '!', '!', '!']
];

function genQues(x) {
    if (x == 'A') return "first letter in the word - APPLE";
    if (x == 'B') return "first letter in the word - BANANA";
    if (x == 'C') return "first letter in the word - CAT";
    if (x == 'D') return "first letter in the word - DOG";
    if (x == 'E') return "first letter in the word - ELEPHANT";
    if (x == 'F') return "first letter in the word - FAN";
    if (x == 'G') return "first letter in the word - GOAT";
    if (x == 'H') return "first letter in the word - HEN";
    if (x == 'I') return "first letter in the word - INDIA";
    if (x == 'J') return "first letter in the word - JAGUAR";
    if (x == 'K') return "first letter in the word - KAYAK";
    if (x == 'L') return "first letter in the word - LEOPARD";
    if (x == 'M') return "first letter in the word - MOUSE";
    if (x == 'N') return "first letter in the word - NANNY";
    if (x == 'O') return "first letter in the word - OPERA";
    if (x == 'P') return "first letter in the word - POWDER";
    if (x == 'Q') return "first letter in the word - QUORA";
    if (x == 'R') return "first letter in the word - RAT";
    if (x == 'S') return "first letter in the word - SAMPLE";
    if (x == 'T') return "first letter in the word - TRUCK";
    if (x == 'U') return "first letter in the word - UMBRELLA";
    if (x == 'V') return "first letter in the word - VIOLIN";
    if (x == 'W') return "first letter in the word - WIND";
    if (x == 'X') return "first letter in the word - XYLOPHONE";
    if (x == 'Y') return "first letter in the word - YUMMY";
    if (x == 'Z') return "first letter in the word - ZEBRA";
}

function genTableOne() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            arrOne[i][j] = genRandAlpha();
        }
    }
    return arrOne;
}

function genTableTwo() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arrTwo[i][j] = genRandAlpha();
        }
    }
    return arrTwo;
}

function genTableThree() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            arrThree[i][j] = genRandAlpha();
        }
    }
    return arrThree;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genQuesFromTable(arr) {
    var i = getRandomInt(0, arr.length - 1);
    var j = getRandomInt(0, arr[0].length - 1);
    var alpha = arr[i][j];
    return genQues(alpha);
}

module.exports = {
    genRandAlpha: genRandAlpha,
    genTableOne: genTableOne,
    genTableTwo: genTableTwo,
    genTableThree: genTableThree,
    genQuesFromTable: genQuesFromTable
}
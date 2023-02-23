// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
const sayHello = function(input) {
    if (input === true) {
        return "Hello, World!";
    } else if ( input === false) {
        return "Hello, World!";
    } else {
        return `Hello, ${input}!`;
    }
}

const isFive = function () {
    return
}

const isEven = function (input) {
    return  parseFloat(input) % 2 === 0
}

const isVowel = function (input) {
    if (typeof (input) === "string") {
        let caseSet = input.toLowerCase();
        if (caseSet === "a" ||
            caseSet === "e" ||
            caseSet === "i" ||
            caseSet === "o" ||
            caseSet === "u") {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

const add = function (numOne, numTwo) {
    if (isNaN(numOne) === false &&
        typeof (parseFloat(numOne)) === "number" &&
        isNaN(numTwo) === false &&
        typeof (parseFloat(numTwo)) === "number")
    {
        return parseFloat(numOne) + parseFloat(numTwo)
    } else {
        return "NaN"
    }
}
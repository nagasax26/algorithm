/*
Loop over the following array, showing each element, 
and ask the user if he wants to continue. 
Continue looping until the user stops you! Loop the array again and again if needed.
*/
/*
var array = ["first", "second", "third", "last"];

let x = 0;
let check;
do {
    console.log(array[x]);
    x++;
    if (x === array.length) {
        x = 0;
    }
    check = prompt('to continu press enter, to exsit enter anything');
}
while (check === '')
*/



/*
Swap Two Number Variables Without Using a Temp Variable.
*/

/*
let a = 5;
let b = 6;

swapNumber(a, b);
let swapNumber = function (a, b) {

}

*/

/*
Swap Two String Variables Without Using a Temp Variable.
*/
/*
let a = 'nba';
let b = 'soccer';

let swapFunction = function(){

}
*/

/*
pritn N star
*/
/*
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`For N = ${randomNumber}:`)
let star = '';
for (let i = 0; i < randomNumber; i++) {
    for (let j = 0; j < i + 1; j++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);
*/


/*
print star reverse
*/
/*
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`For N = ${randomNumber}:`)
let starReversed = '';
for (let i = randomNumber - 1; i >= 0; i--) {
    for (let j = 0; j < i + 1; j++) {
        starReversed += '*';
    }
    starReversed += '\n';
}
console.log(starReversed);
*/

/*
Write some code that takes a string and reverses it:
*/
/*
let reverse = function(str) {
    var reversed = [...str].reverse().reduce((res, ele) => res += ele);
    return reversed
}
*/

/*
Write another function that checks if a string is a palindrome. 
It should return true if it is, false otherwise.
*/
/*
let isPalindrome = function (str) {
    let arr = [...str];
    let i = 0,
        j = arr.length - 1;

    while (i < j) {
        if (arr[i++] !== arr[j--]) {
            return false;
        }
    }

    return true;
}
*/

/*
SIMPLE CIPHER!
Given a string, encrypt it. 
For example: let's say I want to encrypt the word "cat". 
An easy way would be to just 'shift' every letter by one to the right, so:

Hence, "cat" becomes "dbu" when encrypted. 
Write a function that takes a string 
and returns an encrypted version in this simple fashion.

Yup, write a function that decrypts what you've encrypted.*/

/*
let encrypt = function (str) {
    let hashed = [...str].map((e) => String.fromCharCode(e.charCodeAt() + 1)).reduce((res, ele) => res += ele);
    return hashed;
}

let decrypt = function (str) {
    let hashed = [...str].map((e) => String.fromCharCode(e.charCodeAt() - 1)).reduce((res, ele) => res += ele);
    return hashed;
}
*/
/*
let encryptWithSecret = function (str, secret) {
    let secretArray = [...secret];
    let i = 0;
    let hashed = [...str]
        .map((char) => {
            let sec = (secretArray[(i++) % secretArray.length].charCodeAt() % 97) + 1;
            let result = (char.charCodeAt() + sec);
            let calc = result;
            if (result > 122) {
                calc = (result % 122) + 96
            }
            return String.fromCharCode(calc);
        })
        .reduce((res, ele) => res += ele);
    return hashed;
}
*/

/*
Given an array, return a new array that removes any duplicates
*/
/*
let dupes = function (arr) {
    let obj = {};
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            arr2.push(arr[i]);
            obj[arr[i]] = arr[i];
        }
    }
    return arr2;
}
*/

/*
JUMBLED
Given two arrays, 
return one array that includes all of the elements of both arrays, in a randomized order. For example:
*/

/*
var colors = ["red", "indigo", "white", "teal", "yellow"];
var foods = ["bread", "cheese", "cucumber"];

function jumble(arr1, arr2) {

    let arr = [...arr1, ...arr2];
    var jumbledArr = [];

    while (arr.length > 0) {
        let index = Math.floor(Math.random() * arr.length);
        jumbledArr.push(arr[index]);
        arr.splice(index, 1);
    }

    return jumbledArr;
}

console.log(jumble(colors, foods));
*/

let addBox = function () {
    let value = document.getElementById('input-box').value;
    var regex = new RegExp(/^\b[1-9]+\b$/, 'g');
    if (regex.test(value) === false) {
        return alert('please enter a number');
    }

    let color = document.querySelector('input[type="color"]').value;

    let element = document.createElement('div');
    element.classList.add('box');
    element.style.display = 'inline-block';
    element.style.backgroundColor = color;
    element.style.height = value + 'px';
    element.style.width = value + 'px';
    element.style.marginRight = 10 + 'px';
    element.style.border = '1px solid rgba(0,0,0, .6)';

    document.querySelector('.container').appendChild(element);
}

let sortByBoxHeight = function () {
    let container = document.querySelector('.container');
    let boxes = document.querySelectorAll('.container .box');
    // ↓ let us change the position in the array for the sort method.
    boxes = [...boxes];

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    for (let i = 0; i < boxes.length - 1; i++) {
        for (let j = 0; j < boxes.length - i - 1; j++) {
            let height1 = Number(boxes[j].style.height.replace('px', ''));
            let height2 = Number(boxes[j + 1].style.height.replace('px', ''));
            if (height1 > height2) {
                let tmp = boxes[j];
                boxes[j] = boxes[j + 1];
                boxes[j + 1] = tmp;
            }
        }
    }


    for (let i = 0; i < boxes.length; i++) {
        container.appendChild(boxes[i]);
    }

}

let clearBoxes = document.getElementById('clearBoxes');

clearBoxes.addEventListener('click', function () {
    let container = document.getElementsByClassName('container')[0];

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});


let shuffleBoxes = function () {
    let container = document.querySelector('.container');
    let boxes = document.querySelectorAll('.container .box');
    // ↓ let us change the position in the array for the sort method.
    boxes = [...boxes];
    let shuffle = [];
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    while (boxes.length) {
        let random = Math.floor(Math.random() * boxes.length);
        shuffle.push(boxes[random]);
        boxes.splice(random, 1);
    }

    for (let i = 0; i < shuffle.length; i++) {
        container.appendChild(shuffle[i]);
    }
}


let colorCheck = function (color1, color2) {
    return color2._r - color1._r || color2._g - color1._g || color2._b - color1._b;
}


let sortByBoxColor = function () {
    let container = document.querySelector('.container');
    let boxes = document.querySelectorAll('.container .box');
    // ↓ let us change the position in the array for the sort method.
    boxes = [...boxes];

    for (let i = 0; i < boxes.length - 1; i++) {
        for (let j = 0; j < boxes.length - i - 1; j++) {
            let color1 = tinycolor(boxes[j].style.backgroundColor);
            let color2 = tinycolor(boxes[j + 1].style.backgroundColor);
            if (colorCheck(color1, color2) > 0) {
                let tmp = boxes[j];
                boxes[j] = boxes[j + 1];
                boxes[j + 1] = tmp;
            }
        }
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < boxes.length; i++) {
        container.appendChild(boxes[i]);
    }

}
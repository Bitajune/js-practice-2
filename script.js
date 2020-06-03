///////////////////////////////////////
// Lecture: Hoisting

////function declaration uses hoisting
// calculateAge(1990);
// function calculateAge(year) {
//     console.log(2020 - year);
// }

// // function expression does not hoist
// let retirement = function (year) {
//     console.log(65 - (2020 - year));
// }
// retirement(1990);

// // variables do not hoist
// let age = 30;
// console.log(age);

// function foo() {
//     let age = 65;
//     console.log(age);
// }
// foo();
// console.log(age); 

///////////////////////////////////////
// Lecture: Scoping


// first scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }


// example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(c);
}




///////////////////////////////////////
// Lecture: The this keyword










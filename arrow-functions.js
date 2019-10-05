
var names = ['Andrew', 'Katie', 'Mike'];

// non-ES6 version
names.forEach(function (name) {
    console.log(name);
})

console.log('...now for the arrow function version...');
names.forEach(name => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Steve'));

console.log('...now for the nested arrow function version...');
var myString = '!';
var returnAll = (name) => {
    console.log(name + myString);
};

returnAll(names[0]);

// Object Literal Syntax
// Arrow functions, like function expressions, can be used to return an object literal expression. The only caveat is that the body needs to be wrapped in parentheses, in order to distinguish between a block and an object (both of which use curly brackets).
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}

// MAP
const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
  ];
  // ES5
    var prices = smartPhones.map(function(smartPhone) {
        return smartPhone.price;
    });
    
    console.log(prices); // [649, 576, 489]

// FILTER
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// ES5
    var divisibleByThrreeES5 = array.filter(function (v){
    return v % 3 === 0;
    });
// ES6
    const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);
console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]


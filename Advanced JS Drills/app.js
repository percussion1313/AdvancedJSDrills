//Hoisting
console.log('Helllllooooo Jerry');

name = 'Peter';
var name;
console.log(name);
// I expect an undefined log. I was wrong. Should have seen that coming

setName();
function setName() {
    var name = 'Peter';
    console.log(name);
};

//I expect my name to show up through hoisting 

console.log('Jerry');
let avg = findAvg(2, 2);
console.log('Kramer', avg);
function findAvg(a, b) {
    console.log('GEORGE');
    var answer = (a + b) / 2;
    return answer;
}

//Jerry, Kramer/2, George would be the 'guess', but through hoisting. the function will be called after the first console log. Then the let avg(Kramer)


let fruits = ['Apple', 'Banana', 'Durian'];
let leastFav;


//Scoping
function printFruits() {
    let favFruit = 'Peach';
    let leastFav = (fruits[2])
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit)
    }
    printFavFruit();
    
}
printFruits();

console.log(leastFav)

randoFunction();
function randoFunction() { 
    console.log('There is a snake in my boot!')
}



var someFunc = function(){
    alert('YO');
}

someFunc();



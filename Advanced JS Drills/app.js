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
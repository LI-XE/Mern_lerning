// 1.
console.log(hello);                                   
let hello = 'world';  

// console.log(hello);
// let hello = "world";
// output: Cannot access 'hello' before initialization

//2.
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}

// function test(){
//     let needle = 'magnet';
//     console.log(needle);
// }
// let needle = 'haystack';
// test();
// //output: magnet

// 3.
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);

// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// let brendan = "super cool";
// print();
// console.log(brendan);
// // output: only okay
//            only okay

//4.
let food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}

// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }
// let food = "chicken";
// console.log(food);
// eat();
// //output: chicken
//           Cannot access 'food' before initialization

//5.
mean();
console.log(food);
const mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);

// mean();
// console.log(food);
// const mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// //output: mean is not a function

//6.
console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);

// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     let genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// let genre = "disco";
// rewind();
// console.log(genre);
// //output: Cannot access 'genre' before initialization

//7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// function learn() {
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     let dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
// //output: sanjose  // Javascript allows this even though it is NOT defined as a var in the global scope
// //        Cannot access 'genre' before initialization


//8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// // output: Assignment to constant variable
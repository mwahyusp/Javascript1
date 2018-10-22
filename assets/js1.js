// LEVEL 0 ---------------
// function add(a,b){
//     return a + b
// }
// function substract(a,b){
//     return a - b
// }
// function divide(a,b){
//     return a / b
// }
// function modulo(a,b){
//     return a % b
// }

// console.log(add(4,2))
// console.log(substract(4,2))
// console.log(divide(4,2))
// console.log(modulo(4,2))

// LEVEL 1 ----------------

// function add(a,b){
//     return a * b
// }
// function add(a,b){
//         return a * b
//     }
// function add(a,b){
//         return a * b
//     }

// console.log(add(2,"abc"))
// console.log(add(2,true))
// console.log(add(2,-999999999999999))

// LEVEL 2 ----------------

// var arrayOfNumber = [1,2,3,4,5]

// function pushArray(arrayOfNumber, b) {
//     arrayOfNumber.push(b)
//     return arrayOfNumber
// }
// function popArray(arrayOfNumber, b) {
//     arrayOfNumber.pop(b)
//     return arrayOfNumber
// }

// console.log(arrayOfNumber)
// console.log(pushArray(arrayOfNumber, 6))
// console.log(popArray(arrayOfNumber))
// console.log(popArray(arrayOfNumber))
// console.log(pushArray(arrayOfNumber, 99))

// LEVEL 3 ------------------

// const sentenceA = "Hello World!";
// const sentenceB = "Good Bye!";

// console.log(sentenceA);
// console.log(sentenceB);

// // LEVEL 4 -------------------
/* const sentenceC = sentenceA + " " + sentenceB;
    console.log(sentenceC)
    const sentenceD = `${sentenceA} ${sentenceB}`;
    console.log(sentenceD)*/

// function combineString(a,b){
//     return `${a} ${b}`
// }
// console.log(combineString(sentenceA, sentenceB))

// LEVEL 5 -------------------

// function displayUpperCase(sentenceA) {
//     return sentenceA.toUpperCase();
// }
// function displayLowerCase(sentenceA) {
//     return sentenceA.toLowerCase();

// }
// console.log(displayUpperCase(sentenceA))
// console.log(displayLowerCase(sentenceA))

// LEVEL 6 -------------------

// function displayTitleCase(string) {
//     string = string.toLowerCase().split(" ")

//     stringTitleCase = ""
//     for (i = 0; i < string.lenght; i++) {
//         string[i] = string[i][0].toUpperCase() + string[i].substring(1))
//         stringTitleCase += `${string[i]}`
//     }

//     // console.log(string)
// }

// displayTitleCase("HeLLoW WooRlDD")
// displayTitleCase("JAVaScrIPT STRing ManiPulation")

// LEVEL 7 -------------------
// function biggerOrSmaller(a,b){
// if (a < b) {
//     return `${a} is smaller than ${b}`;
// } else {
//     return `${a} is bigger than ${b}`;
// }
// }
// console.log(biggerOrSmaller(1, 2))
// console.log(biggerOrSmaller(2, 1))

// LEVEL 8 -------------------

// function compareNumber(a,b){
// if (a < b) {
//     return `${a} is smaller than ${b}`;
// } else if (a > b) {
//     return `${a} is bigger than ${b}`;
// }
// else {
//     return `${a} is equal with ${b}`;

// }
// }
// console.log(compareNumber(1, 2))
// console.log(compareNumber(2, 1))
// console.log(compareNumber(2, 2))

// LEVEL 9 -------------------
// function isBigger(a,b){
//     return a > b ? true : false;
// }

// console.log(isBigger(2, 1))

// LEVEL 10 -------------------
// function betweenOneAndTen(a){
//     return a <= 10 && a >= 1 ? true : false;
// }
// console.log(betweenOneAndTen(5))
// console.log(betweenOneAndTen(9))
// console.log(betweenOneAndTen(22))

// LEVEL 11 -------------------
// function getRandomNumber(){
//     return Math.random();
// }

// console.log(getRandomNumber())
// console.log(getRandomNumber())
// console.log(getRandomNumber())

// LEVEL 12 -------------------

$(document).ready(function() {
  var inputs = [""];
  var totalString;
  var operators1 = ["+", "-", "/", "*"];
  var operators2 = ["."];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {
    if (operators2.includes(input) && input === ".") {
      console.log("Duplicate '.'");
    } else if (inputs.length === 1 && operators1.includes(input)) {
      inputs.push(input);
    } else if (operators1.includes(input)) {
      inputs.push(input);
    } else if (nums.includes(parseInt(input))) {
      inputs.push(input);
    }

    update();
  }

  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }

  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }

  $("a").on("click", function() {
    if (this.id === "deleteAll") {
      inputs = [""];
      update();
    } else if (this.id === "backOne") {
      inputs.pop();
      update();
    } else if (this.id === "total") {
      getTotal();
    } else {
      getValue(this.id);
    }
  });
});

// Level 24,35,26 address book ----------------
// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
// }

// function list() {
// 	var contactsLength = contacts.length;
// 	for (var i = 0; i < contactsLength; i++) {
// 		printPerson(contacts[i]);
// 	}
// }

// /*Create a search function
// then call it passing "Jones"*/
// function search(lastName){
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++){
//         if (contacts[i].lastName === lastName){
//             printPerson(contacts[i]);
//         }
//     }
// }

// function add(firstName, lastName, email, phoneNumber){
//     contacts[contacts.length] = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         phoneNumber: phoneNumber,
//     };
// }

// add("cwylie", "zero", "cwylie0@address.js", "(555) 444-8098");
// list();
// // Level 27,28,29 todo list ----------------

// let todo_list = [{
//     todo: "Learn React",
//     done: false
// },
// {
//     todo: "Learn React Native",
//     done: false
// }, {
//     todo: "Learn NodeJs",
//     done: false
// }, {
//     todo: "Learn ES6",
//     done: false
// }
// ]

// function create_todo(todo) {
// todo_list.push({
//     todo: todo,
//     done: false
// })
// }

// function read_todo() {
// console.log(todo_list)
// }

// function update_todo(index, key, value) {
// todo_list[index][key] = value
// }

// function delete_todo(index) {
// todo_list.splice(index, 1);
// }

// function search_todo(key, value) {
// let const_result = todo_list.filter(todo => todo[key] === value)
// console.log(const_result)
// }

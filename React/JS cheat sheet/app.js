//import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);¨

// let userMessage = "Hello World!";

// console.log(userMessage);
// console.log(userMessage);

// if (10 === 10) {
// console.log("works");
// }

// function createGreeting1(
//  userName,
//  message = "My Id number is",
//  idNumber = 24028902735
// ) {
//  console.log(userName);
//  console.log(message);
//  console.log(idNumber);
//  return "Hi, I am " + userName + "." + " " + message + " " + idNumber + ".";
// }
// function createGreeting2(userName, message = "Hello, what's up?", age = 15) {
//  console.log(userName);
//  console.log(message);
//  console.log(idNumber);
//  return (
//    "Hi, I am " +
//    userName +
//    "." +
//    " " +
//    message +
//    "." +
//    " My age is" +
//    " " +
//    age
//  );
// }

// const greeting1 = createGreeting1("Max");
// console.log(greeting1);

// const greeting2 = createGreeting2("Manuel");
// console.log(greeting2);

export default (userName, message) => {
    console.log("Hello");
    return userName + message;
  };
  
  // Arrow function syntax examples
  
  // i stedet for å skrive:
  
  // (username) => {
  //
  // }
  
  //kan du skrive
  
  // username => {
  // }
  
  //If your function takes no parameters, parentheses must not be omitted - () => { ... } vil være riktig
  
  // Om funksjonen tar flere enn en parameter kan du heller ikke gjøre det - userName, userAge => { ... } vil være feil
  // her ville (userName, userAge) => { ... } vært riktig
  
  // If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword
  
  // instead of writing:
  
  // number => {
  //  return number * 3;
  // }
  
  // you could write:
  
  // number => number * 3;
  
  // the following code would be invalid
  
  // number => return number * 3;
  // number => if (number === 2) { return 5 };
  // invalid because if statements can't be returned
  
  // const user = {
  //   name: "Max",
  //   age: 34,
  //   greet() {
  //     console.log("Hello!");
  //     console.log(this.age);
  //   }
  // };
  
  // console.log(user.name);
  // user.greet();
  
  // class User {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  
  //   greet() {
  //     console.log("Hi!");
  //   }
  // }
  
  // const user1 = new User("Manuel", 35);
  // console.log(user1);
  // user1.greet()
  
  // const hobbies = ["Sports", "Cooking", "Reading"];
  // console.log(hobbies[0]);
  
  // hobbies.push("Working");
  // console.log(hobbies);
  
  // const index = hobbies.findIndex((item) => item === "Sports");
  
  // console.log(index);
  
  // const editedHobbies = hobbies.map((item) => ({text: item}));
  // console.log(editedHobbies);
  
  // const [firstName, lastName] = ["Max", "Schwarzmuller"];
  
  // console.log(firstName)
  // console.log(lastName)
  
  // destructuring
  
  // const user = {
  //   name: "Max";
  //   age: 34
  // };
  
  // const { name: userName, age } = {
  //   name: "Max",
  //   age: 34
  // };
  
  // console.log(userName);
  // console.log(age)
  
  // 27. The spread operator
  
  // const hobbies = ["Sports", "Cooking"]
  // const user = {
  //   name: "Max",
  //   age: 34
  // };
  
  // const newHobbies = ["Reading"]
  
  // const mergedHobbies = [...hobbies, ...newHobbies]
  // console.log(mergedHobbies)
  
  // const extendedUser = {
  //   isAdmin: true,
  //   ...user
  // }
  // console.log(extendedUser)
  
  // 28. Revisiting Control Structures:
  
  // const password = prompt("Your password");
  
  // if (password === "Hello") {
  //   console.log("Hello works");
  // } else if (password === "hello") {
  //   console.log("hello works");
  // } else {
  //   console.log("Access not granted.");
  // }
  
  // const hobbies = ["Sports", "Cooking"];
  
  // for (const hobby of hobbies) {
  //   console.log(hobby);
  // }
  
  // 29. Manipulating the DOM - Not With React!:
  
  // const list = document.querySelector("ul");
  // list.remove();
  
  // 30. Using Functions as Values:
  
  // function handleTimeout() {
  //   console.log("Timed out!");
  // }
  
  // const handleTimeout2 = () => {
  //   console.log("Timed out ... again!");
  // };
  
  // setTimeout(handleTimeout, 2000);
  // setTimeout(handleTimeout2, 3000);
  // setTimeout(() => {
  //   console.log("More timing out...");
  // }, 4000);
  
  // function greeter(greetFn) {
  //   greetFn();
  // }
  
  // greeter(() => console.log("Hi"));
  
  // 31. Defining Functions Inside Of Functions
  
  // function init() {
  //   function greet() {
  //     console.log("Hi");
  //   }
  
  //   greet();
  // }
  
  // init();
  
  // 32. Reference vs Primitive Values
  
  // let userMessage = "Hello!";
  // userMessage = userMessage.concat("!!!");
  
  // // const message = "Hello";
  
  // const hobbies = ["Sports", "Coocking"];
  // hobbies.push("Working");
  // console.log(hobbies);
  
let input = document.getElementById("input");
let display = document.getElementById("result");

let getValue = (x) => {
  input.value += x;
};
// let showResult = (callback) => {}
let showResult = () => {
  let result = eval(input.value);
  //   callback();
  display.value = result;
  return result;
};

let clearResult = () => {
  input.value = "";
  display.value = "";
};

let getUsers = () => {
  let users = [
    { userName: "Ahmed", email: "Ahmed@gmail.com" },
    { userName: "Ali", email: "Ali@gmail.com" },
  ];
  return users;
};
let findUser = (userSearchedfor) => {
  let users = getUsers();
  let user = users.find((m) => {
    return m.userName == userSearchedfor;
  });
  //   console.log(user);
  return user.userName;
};

console.log(findUser("Ali"));

// let greet_one = "Hello";
// let greet_two = "World";
// console.log(greet_one);

// setTimeout(function () {
//   console.log("Asynchronous");
// }, 10000);
// console.log(greet_two);

/**
 * callback function
 */
// function add(x, y) {
//   // let add =(x,y) => {}
//   return x + y;
// }
// function multiply(x, y) {
//   //let multiply =(x,y) => {}
//   return x * y;
// }
// function calculate(a, b, operation) {
//   //let calculate = (a,b, operation) => {}
//   return operation(a, b);
// }
// const addition = calculate(5, 3, add);
// console.log(addition);
// const multiplication = calculate(5, 3, multiply);
// console.log(multiplication);

// console.log(eval("3*3"));

/**
 * Timing functions
 */
// let print = () => {
//   console.log("Teachmecode!!!");
// };

// console.log(setInterval(print, 3000));
// console.log(setTimeout(print, 3000));

// let showAlert = () => {
//   alert("Hello World");
// };

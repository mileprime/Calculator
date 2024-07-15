let input = document.getElementById("input");
let display = document.getElementById("result");

let getValue = (x) => {
  input.value += x;
};

let showResult = (callback) => {
  let result = eval(input.value);
  callback();
  display.value = result;
  return result;
};

let clearResult = () => {
  input.value = "";
  display.value = "";
};

// console.log(eval("3*3"));

let print = () => {
  console.log("Teachmecode!!!");
};

console.log(setInterval(print, 3000));
// console.log(setTimeout(print, 3000));

let showAlert = () => {
  alert("Hello World");
};

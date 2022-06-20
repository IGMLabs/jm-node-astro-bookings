const fourSeconds = 4000;

console.log("Before with inner function");
setTimeout(() => {
  console.log("Hello after 4 seconds");
}, fourSeconds);

console.log("Before with declared function");

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, fourSeconds);

console.log("Before with arrow function expression");

const printHello2 = () => console.log("Hello2");

setTimeout(printHello2, fourSeconds);

console.log("Before with arrow function expression");

const printHello3 = (name) => console.log("Hello" + name);

setTimeout(printHello3, fourSeconds, "IGM");

console.log("After all the code");

const printHello = (name) => console.log("Hello" + name);
setInterval()


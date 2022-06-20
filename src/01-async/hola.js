const twoSeconds = 2000;

let counter = 0;
const intervalId = setInterval(() => {
  console.log("Hola" + counter);
  counter = counter + 1;
  if (counter > 3) {
    clearInterval(intervalId);
  }
}, twoSeconds);

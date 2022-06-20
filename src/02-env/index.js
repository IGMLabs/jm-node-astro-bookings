import * as lib from "/lib.js";

console.log(process.env.USER);
console.log(lib.empresa);
console.log(global.user);

process.argv.forEach((item, index) => {
  console.log(`Pos:${index} - Value: ${item}`);
});

const args = process.argv.slice(2);
const cliente = {
  nombre: args[0],
  saldo: args[1],
};
global.cliente = cliente;

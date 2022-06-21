import * as fs from "fs/promises";

const scriptFile = process.argv[1];
fs.readFile(scriptFile)
  .then(copyFile)
  .catch((err) => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    console.log("Terminado");
  });

function copyFile(fileContent) {
  fs.writeFile(`${scriptFile}.copy.txt`, fileContent.toString())
    .then(() => {
      console.log("Archivo copiado");
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("TERMINADO"));
}

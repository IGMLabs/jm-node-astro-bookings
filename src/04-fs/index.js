import * as fs from "fs";

const scriptFile = process.argv[1];
const fileContent = fs.readFileSync(scriptFile);
console.log(fileContent.toString());

fs.readFile(scriptFile,(err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`Data: ${data}`);
    }
})

function copyFile(err, fileContent){
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        fs.writeFile(`${scriptFile}.copy.txt`, fileContent, () => {

        });
    }
}

fs.readFile(scriptFile, copyFile);
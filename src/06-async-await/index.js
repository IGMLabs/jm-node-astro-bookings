import * as fs from "fs/promises";

readFile();

async function readFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContents = await fs.readFile(scriptFile);
    await copyFile(fileContents.toString(), scriptFile);
  } catch (err) {
    console.log(`💣: ${err}`);
  }
}

async function copyFile(fileContent, scriptFile) {
    try {
      await fs.writeFile(`${scriptFile}.copy.txt`, fileContent);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

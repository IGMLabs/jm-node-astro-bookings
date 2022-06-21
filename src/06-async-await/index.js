import * as fs from "fs/promises";

readFile();

async function readFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContents = await fs.readFile(scriptFile);
    console.log(fileContents.toString());
  } catch (err) {
    console.log(`💣: ${err}`);
  }
}

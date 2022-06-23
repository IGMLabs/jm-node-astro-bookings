import * as https from "https";
import * as http from "http";
// import * as fs from "fs/promises";
import * as fs from "fs";

https.get("https://www.google.com", (res) => {
  let writeStream = fs.createWriteStream("www.google.com.html");
  res.on("data", (data) => {
    writeStream.write(data);
  });
  res.on("end", () => {
    writeStream.close();
  });
});

http.get("http://localhost:3000/agencies", processStream);

function processStream(responseStream) {
  let body = "";
  responseStream.on("data", (chunk) => {
    body += chunk;
  });
  responseStream.on("end", () => {
    const agencies = JSON.parse(body);
    console.log(agencies[1]);
  });
}

import * as cp from "child_process";

const child = cp.fork("./src/07-child/child.js");


child.on("message", (arg) => console.log(`Recived from child ${arg.msg}`));

child.send({ msg: "I am a parent child working" });

child.on("close", (code) => console.log("child closed, code: " + code));

child.send({ close: true });

setTimeout( () => child.send({ msg: "I am a parent child working" }), 1000);
setTimeout( () => child.send({ close: true }), 1000);

console.log("parent started working");
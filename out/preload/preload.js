"use strict";
const main = require("electron-trpc/main");
console.log("fuck yeah i'm mounted up...");
process.once("loaded", () => {
  main.exposeElectronTRPC();
});

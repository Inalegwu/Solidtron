import { exposeElectronTRPC } from "electron-trpc/main";

console.log("fuck yeah i'm mounted up...");

process.once("loaded", () => {
  exposeElectronTRPC();
});

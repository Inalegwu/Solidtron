"use strict";
const electron = require("electron");
const server = require("@trpc/server");
const main = require("electron-trpc/main");
const node_path = require("node:path");
async function createContext(opts) {
  const bwindow = electron.BrowserWindow.getFocusedWindow();
  return {
    window: bwindow
  };
}
const t = server.initTRPC.context().create({
  isServer: true
});
const publicProcedure = t.procedure;
t.middleware;
const router = t.router;
const windowRouter = router({
  closeWindow: publicProcedure.mutation(async ({ ctx }) => {
    ctx.window?.close();
  })
});
const appRouter = router({
  window: windowRouter
});
electron.app.setName("Solidtron");
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    frame: false,
    show: false,
    webPreferences: {
      sandbox: false,
      preload: node_path.join(__dirname, "../preload/preload.js")
    }
  });
  main.createIPCHandler({
    router: appRouter,
    windows: [mainWindow],
    createContext
  });
  mainWindow.webContents.on("dom-ready", () => {
    mainWindow.show();
  });
  {
    mainWindow.loadURL("http://localhost:5173");
  }
}
electron.app.whenReady().then(() => {
  createWindow();
});
electron.app.once("window-all-closed", () => electron.app.quit());

import type { inferAsyncReturnType } from "@trpc/server";
import { BrowserWindow } from "electron";
import type { CreateContextOptions } from "electron-trpc/main";
import store from "./storage";

export default async function createContext(opts: CreateContextOptions) {
  const bwindow = BrowserWindow.getFocusedWindow();

  return {
    window: bwindow,
    store,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;

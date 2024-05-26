import type { GlobalState } from "@src/shared/types";
import { createStore } from "solid-js/store";

export const state = createStore<GlobalState>({
  colorMode: "light",
});

import type { JSX } from "solid-js";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div class="w-full h-screen bg-dark-9 text-white">
      <div class="w-full px-3 py-3 flex items-center justify-between">
        <p class="text-xs text-zinc-400">Solidtron</p>
        <div class="flex flex-1 p-2" id="drag-region" />
      </div>
      {children}
    </div>
  );
}

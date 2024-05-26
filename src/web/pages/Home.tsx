import { Popover } from "@ark-ui/solid";
import { Minus, Plus } from "lucide-solid";
import { createSignal } from "solid-js";
import Layout from "../components/layout";

export default function Home() {
  const [count, setCount] = createSignal<number>(0);

  return (
    <Layout>
      <section class="w-full h-screen px-20 py-20 text-center flex flex-col items-center justify-center font-[Bricolage] space-y-5">
        <h1 class="text-2xl">
          Solidtron - Create Awesome local first apps with SolidJS and Electron
        </h1>
        <h1 class="text-4xl">{count()}</h1>
        <div class="flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={() => setCount(count() - 1)}
            class="px-5 py-3 flex items-center justify-center space-x-3 appearance-none border-none cursor-pointer rounded-md bg-indigo-500 text-white"
          >
            Decrement
            <Minus size={13} />
          </button>
          <button
            type="button"
            onClick={() => setCount(count() + 1)}
            class="px-5 py-3 flex items-center justify-center space-x-3 appearance-none border-none rounded-md cursor-pointer bg-indigo-500 text-white"
          >
            Increment
            <Plus size={13} />
          </button>
        </div>
        <Popover.Root>
          <Popover.Trigger class="appearance-none border-1 border-solid border-zinc-200 rounded-md px-3 py-3 cursor-pointer">
            An Ark-UI Popover
          </Popover.Trigger>
          <Popover.Content class="shadow-md bg-light-1 shadow-op-[0.4] border-1 border-solid border-zinc-200 rounded-lg px-4 py-4">
            Ark UI popover content
          </Popover.Content>
        </Popover.Root>
      </section>
    </Layout>
  );
}

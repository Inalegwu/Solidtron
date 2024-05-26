import { publicProcedure, router } from "@src/trpc";

export const windowRouter = router({
  closeWindow: publicProcedure.mutation(async ({ ctx }) => {
    ctx.window?.close();
  }),
});

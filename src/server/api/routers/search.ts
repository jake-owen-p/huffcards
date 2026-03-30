import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { searchProducts } from "~/data";

export const searchRouter = createTRPCRouter({
  query: publicProcedure
    .input(
      z.object({
        q: z.string(),
        limit: z.number().min(1).max(50).optional(),
      }),
    )
    .query(({ input }) => {
      return searchProducts(input.q, input.limit);
    }),
});

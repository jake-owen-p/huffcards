import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { categories, getCategoryBySlug } from "~/data";

export const categoryRouter = createTRPCRouter({
  list: publicProcedure.query(() => {
    return categories;
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input }) => {
      return getCategoryBySlug(input.slug) ?? null;
    }),
});

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  getProductsByCategory,
  getProductBySlug,
  getFeaturedProducts,
  getNewProducts,
  getRelatedProducts,
} from "~/data";

export const productRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        category: z.enum(["pokemon", "yugioh", "magic"]),
        productType: z
          .enum([
            "booster-box",
            "elite-trainer-box",
            "booster-pack",
            "collection-box",
            "starter-deck",
            "tin",
            "bundle",
            "accessory",
          ])
          .optional(),
        sort: z
          .enum(["price-asc", "price-desc", "name", "newest"])
          .optional(),
        minPrice: z.number().optional(),
        maxPrice: z.number().optional(),
        limit: z.number().min(1).max(100).optional(),
        offset: z.number().min(0).optional(),
      }),
    )
    .query(({ input }) => {
      return getProductsByCategory(input.category, {
        productType: input.productType,
        sort: input.sort,
        minPrice: input.minPrice,
        maxPrice: input.maxPrice,
        limit: input.limit,
        offset: input.offset,
      });
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input }) => {
      return getProductBySlug(input.slug) ?? null;
    }),

  featured: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(20).optional() }).optional())
    .query(({ input }) => {
      return getFeaturedProducts(input?.limit);
    }),

  new: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(20).optional() }).optional())
    .query(({ input }) => {
      return getNewProducts(input?.limit);
    }),

  related: publicProcedure
    .input(
      z.object({
        productId: z.string(),
        limit: z.number().min(1).max(10).optional(),
      }),
    )
    .query(({ input }) => {
      return getRelatedProducts(input.productId, input.limit);
    }),
});

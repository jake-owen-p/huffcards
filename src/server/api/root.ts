import { postRouter } from "~/server/api/routers/post";
import { productRouter } from "~/server/api/routers/product";
import { categoryRouter } from "~/server/api/routers/category";
import { searchRouter } from "~/server/api/routers/search";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  product: productRouter,
  category: categoryRouter,
  search: searchRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

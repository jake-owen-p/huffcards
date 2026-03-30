import { env } from "~/env";
import { PrismaClient } from "../../generated/prisma";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = env.DATABASE_URL
  ? (globalForPrisma.prisma ?? createPrismaClient())
  : (null as unknown as ReturnType<typeof createPrismaClient>);

if (env.NODE_ENV !== "production" && env.DATABASE_URL)
  globalForPrisma.prisma = db;

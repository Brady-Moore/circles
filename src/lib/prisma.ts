// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
// ensures that only one instance of Prisma Client exists, even during hot-reloading in development.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";

// jika di run di local
declare global{
    var prisma: PrismaClient | undefined
}

// menglexsibelkan untuk production dan development
export const prisma = globalThis.prisma ||  new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
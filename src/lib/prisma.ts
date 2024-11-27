
/*import { PrismaClient } from "@prisma/client/extension";
const globalPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalPrisma.prisma = prisma;
}
  */
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
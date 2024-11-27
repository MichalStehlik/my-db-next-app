import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.user.createMany({
    data: [{
      name: 'Alice',
      email: 'alice@example.com'
    },
    {
        name: 'Bob',
        email: 'bob@example.com'
    }]
})
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect();
});
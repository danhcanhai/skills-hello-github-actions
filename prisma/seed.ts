import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: 'password',
    },
  });

  await prisma.user.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: 'password',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
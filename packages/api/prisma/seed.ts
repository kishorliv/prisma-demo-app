import { PrismaClient } from '@prisma/client';
import { links } from './seedData/links';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'foo@gmail.com',
      role: 'ADMIN',
    },
  });

  await prisma.link.createMany({
    data: links,
  });
}

main()
  .then(() => console.log('Database seeding successful'))
  .catch((e) => {
    console.error('Database seeding failed: ', e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

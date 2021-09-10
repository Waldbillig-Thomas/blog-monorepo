import { Gender, Prisma, PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

function getAuthor(index: number): Prisma.AuthorCreateInput {
  return {
    firstName: 'firstName ' + index,
    lastName: 'lastName',
    gender: Gender.FEMALE,
    posts: {
      createMany: {
        data: Array.from({ length: 10 }).map((current, index) =>
          getPost(index)
        ),
      },
    },
  };
}

function getPost(index: number): Prisma.PostCreateWithoutAuthorInput {
  return { title: 'title ' + index, content: 'content ' + index };
}

async function main() {
  console.log(`Start seeding ...`);

  await Array.from({ length: 100 }).reduce(async (previous, current, index) => {
    await previous;
    return prisma.author.create({ data: getAuthor(index) });
  }, Promise.resolve());

  console.log(`Seeding finished.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

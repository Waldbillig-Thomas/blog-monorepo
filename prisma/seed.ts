import { Gender, Prisma, PrismaClient } from '@prisma/client';
import { Chance } from 'chance';

const chance = new Chance(1337);
const prisma: PrismaClient = new PrismaClient();

function getAuthor(): Prisma.AuthorCreateInput {
  const gender = chance.gender() as 'male' | 'female';

  return {
    id: chance.guid(),
    firstName: chance.first({ gender }),
    lastName: chance.last(),
    gender: { Female: Gender.FEMALE, Male: Gender.MALE }[gender],
    email: chance.email(),
    posts: {
      createMany: {
        data: Array.from({ length: chance.integer({ min: 0, max: 20 }) }).map(
          () => getPost()
        ),
      },
    },
  };
}

function getPost(): Prisma.PostCreateManyAuthorInput {
  return {
    id: chance.guid(),
    title: chance.sentence(),
    content: chance.paragraph(),
  };
}

async function main() {
  console.log(`Clearing database ...`);
  await prisma.post.deleteMany();
  await prisma.author.deleteMany();

  console.log(`Start seeding ...`);
  await Array.from({ length: 1000 }).reduce(async (previous) => {
    await previous;
    await prisma.author.create({ data: getAuthor() });
  }, Promise.resolve());

  console.log(`Seeding finished.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

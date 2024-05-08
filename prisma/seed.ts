import { randomInt } from "crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  'SALADAS',
  'LEGUMES',
  'CARNES',
  'MASSAS',
  'SOPAS',
  'SOBREMESAS',
]

const avatars = [
  'dessert.png',
  'salad.png',
  'soup.png',
  'meat.png',
  'vegetables.png',
  'pasta.png',
]

function randomPick(arr: any) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

async function seed() {
  // Delete all data
  await prisma.recipe.deleteMany();

  // Seed data
  for (let i = 0; i < 20; i++) {
    await prisma.recipe.create({
      data: {
        name: `Recipe ${i}`,
        ingredients: [
          'Spaghetti',
          'Eggs',
          'Pancetta',
          'Parmesan',
          'Black Pepper'
        ],
        steps: [
          'Cook the pasta',
          'Fry the pancetta',
          'Mix the eggs and cheese',
          'Combine everything'
        ],
        preparationTimeInMinutes: randomInt(10, 50),
        cookingTimeInMinutes: randomInt(10, 30),
        nutritionalValue: randomInt(150, 500),
        category: randomPick(categories),
        avatar: randomPick(avatars),
      }
    });
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
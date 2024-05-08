import { prisma } from '@/lib/prisma'

import { HomeClient } from './home-client';

export default async function Home() {
  const recipes = await prisma.recipe.findMany()

  return <HomeClient data={recipes} />
}
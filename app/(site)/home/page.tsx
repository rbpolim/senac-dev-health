import { Categories } from '@/components/categories';
import { CardRecipe } from '@/components/card-recipe';

import { prisma } from '@/lib/prisma'

export default async function Home() {
  const recipes = await prisma.recipe.findMany()

  return (
    <>
      <Categories />
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} data={recipe} />
        ))}
      </div>
    </>
  )
}
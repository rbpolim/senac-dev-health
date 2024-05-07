import { prisma } from '@/lib/prisma'

export default async function Recipes() {
  const recipes = await prisma.profilesOnRecipes.findMany({
    where: {
      profileId: '1'
    },
    include: {
      recipe: true
    }
  })

  return (
    <div>
      <h1>Recipes Page</h1>
    </div>
  )
}
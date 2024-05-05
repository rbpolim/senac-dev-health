import Image from 'next/image'
import {
  ChevronLeft,
  Clock,
  CookingPot,
  Heart,
  LineChart
} from 'lucide-react'

import { prisma } from '@/lib/prisma'

import { Button } from '@/components/ui/button'

import { ToggleInfoRecipe } from './_components/toggle-info-recipe'
import { ToggleFavoriteRecipe } from './_components/toggle-favorite-recipe'

export default async function RecipeId({
  params
}: {
  params: { recipeId: string }
}) {
  const recipe = await prisma.recipe.findFirstOrThrow({
    where: {
      id: params.recipeId
    }
  })

  return (
    <div>
      <div className='bg-[#F3F5F4] rounded-b-xl p-4'>
        <Button size="icon" variant="ghost">
          <ChevronLeft className='h-8 w-8' />
        </Button>
        <div className='relative aspect-video'>
          <Image
            fill
            src='/risoto.png'
            alt="Risoto de camarão"
            objectFit='cover'
            className='rounded-lg'
          />
          <ToggleFavoriteRecipe />
        </div>
        <h1 className='mt-8 text-3xl font-bold'>
          {recipe.name}
        </h1>
      </div>

      <div className='flex items-center justify-around mt-4 '>
        <div className='flex flex-col items-center'>
          <Clock className='h-6 w-6' />
          <span className='text-sm'>Preparation</span>
          <h3>{recipe.preparationTime}</h3>
        </div>
        <div className='flex flex-col items-center'>
          <CookingPot className='h-6 w-6' />
          <span className='text-sm'>Cooking</span>
          <h3>{recipe.cookingTime}</h3>
        </div>
        <div className='flex flex-col items-center'>
          <LineChart className='h-6 w-6' />
          <span className='text-sm'>Nutricional</span>
          <h3>{recipe.nutritionalValue} kcal</h3>
        </div>
      </div>
      <ToggleInfoRecipe recipe={recipe} />
    </div>
  )
}
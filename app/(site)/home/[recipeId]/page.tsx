import Image from 'next/image'
import {
  Clock,
  CookingPot,
  LineChart
} from 'lucide-react'

import { prisma } from '@/lib/prisma'

import { ButtonBack } from '@/components/button-back'

import { ToggleInfoRecipe } from './_components/toggle-info-recipe'
import { ToggleFavoriteRecipe } from './_components/toggle-favorite-recipe'

export default async function RecipeId({
  params
}: {
  params: { recipeId: string }
}) {
  const recipe = await prisma.recipe.findFirst({
    where: {
      id: params.recipeId
    }
  })

  if (!recipe) {
    return <span>Recipe not found</span>
  }

  return (
    <>
      <div className='bg-neutral-100 rounded-xl p-4'>
        <ButtonBack />
        <div className='relative aspect-video mt-4'>
          <Image
            fill
            src={`/${recipe.avatar}`}
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

      <div className='flex items-center justify-around mt-4'>
        <div className='flex flex-col items-center'>
          <Clock className='h-6 w-6' />
          <span className='text-sm'>Preparation</span>
          <h3 className='text-sm'>{recipe.preparationTimeInMinutes}</h3>
        </div>
        <div className='flex flex-col items-center'>
          <CookingPot className='h-6 w-6' />
          <span className='text-sm'>Cooking</span>
          <h3 className='text-sm'>{recipe.cookingTimeInMinutes}</h3>
        </div>
        <div className='flex flex-col items-center'>
          <LineChart className='h-6 w-6' />
          <span className='text-sm'>Nutricional</span>
          <h3 className='text-sm'>{recipe.nutritionalValue} kcal</h3>
        </div>
      </div>

      <ToggleInfoRecipe recipe={recipe} />
    </>
  )
}
'use client'

import { useState } from "react"
import { Recipe } from "@prisma/client"

import { Button } from "@/components/ui/button"

type Props = {
  recipe: Recipe
}

type Info = 'ingredients' | 'prepare';

export function ToggleInfoRecipe({ recipe }: Props) {
  const [infoRecipe, setInfoRecipe] = useState<Info>('ingredients')

  return (
    <div className="px-4">
      <div className='flex items-center gap-x-4 mt-4'>
        <Button
          size='sm'
          variant={infoRecipe === 'ingredients' ? 'default' : 'outline'}
          onClick={() => setInfoRecipe('ingredients')}
        >
          Ingredientes
        </Button>
        <Button
          size='sm'
          variant={infoRecipe === 'prepare' ? 'default' : 'outline'}
          onClick={() => setInfoRecipe('prepare')}
        >
          Modo de preparo
        </Button>
      </div>

      <div className="mt-4 pl-4">
        <ul>
          {infoRecipe === 'ingredients' && (
            recipe.ingredients?.map(ingredient => (
              <li key={ingredient} className='list-disc'>
                {ingredient}
              </li>
            ))
          )}
          {infoRecipe === 'prepare' && (
            recipe.steps?.map(step => (
              <li key={step} className='list-disc'>
                {step}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
} 
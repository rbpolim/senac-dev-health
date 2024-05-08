'use client'

import { useState } from "react"
import { Recipe } from "@prisma/client"

import { CardRecipe } from "@/components/card-recipe"
import { Categories } from "@/components/categories"

type Props = {
  data: Recipe[]
}

export function HomeClient({ data }: Props) {
  const [category, setCategory] = useState('SALADAS')

  const filtered = data.filter((item) => item.category === category)

  return (
    <>
      <Categories
        category={category}
        onSelect={setCategory}
      />

      {filtered.length === 0 && (
        <h3 className="text-lg text-center mt-8 text-muted-foreground">
          Não há nenhuma receita nessa categoria 😭
        </h3>
      )}

      <div className='grid grid-cols-2 gap-4 mt-4'>
        {filtered.length > 0 && (
          filtered.map((recipe) => (
            <CardRecipe
              key={recipe.id}
              data={recipe}
            />
          ))
        )}
      </div>
    </>
  )
} 
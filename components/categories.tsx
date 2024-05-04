'use client'

import { useState } from "react";

import { ButtonCategory } from "@/components/button-category";

const CATEGORIES = [
  'Saladas',
  'Legumes',
  'Carnes',
  'Massas',
  'Sopas',
  'Sobremesas',
  'Bebidas',
]

export function Categories() {
  const [category, setCategory] = useState('Saladas')

  return (
    <div className="space-y-2">
      <h2>Selecione uma categoria</h2>
      <div className='flex items-center gap-x-3 overflow-auto pb-2'>
        {CATEGORIES.map((item) => (
          <ButtonCategory
            key={item}
            title={item}
            onClick={() => setCategory(item)}
            isActive={item === category}
          />
        ))}
      </div>
    </div>
  )
}
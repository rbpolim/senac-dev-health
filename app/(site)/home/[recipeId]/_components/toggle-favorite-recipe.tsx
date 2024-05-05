'use client'

import { useState } from "react"
import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"

export function ToggleFavoriteRecipe() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className='shadow-lg flex items-center justify-center absolute w-16 h-16 rounded-full bg-white -bottom-6 -right-2'
    >
      <Heart
        className={cn(
          'h-8 w-8',
          isFavorite ? 'text-red-500' : 'text-gray-500'
        )}
        fill={isFavorite ? 'currentColor' : 'none'}
      />
    </button>
  )
} 
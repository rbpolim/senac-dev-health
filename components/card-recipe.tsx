import Link from "next/link"
import Image from "next/image"
import { Recipe } from '@prisma/client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Props = {
  data: Recipe
}

export function CardRecipe({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{data.nutritionalValue} kcal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-20">
          <Image
            fill
            src='/risoto.png'
            alt="Risoto de camarão"
            objectFit='cover'
            className='rounded-md'
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant='link'>
          <Link href={`/home/${data.id}`}>
            Ver receita
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
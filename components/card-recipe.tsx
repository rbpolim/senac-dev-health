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
        <CardDescription>
          {data.nutritionalValue} kcal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-20">
          <Image
            fill
            src={`/${data.avatar}`}
            alt="Risoto de camarão"
            className='rounded-md object-cover'
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button asChild variant="link">
          <Link href={`/home/${data.id}`}>
            Ver receita
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"

import { prisma } from "@/lib/prisma"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { availableIMC } from '@/utils/available-imc'

export default async function IMC() {
  const user = await currentUser()

  if (!user) {
    redirect("/")
  }

  const profile = await prisma.profile.findFirst({
    where: {
      userId: user.id
    },
    include: {
      IMC: true
    }
  })

  if (!profile?.IMC) {
    return null
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>Seu IMC é:</CardDescription>
          <CardTitle className="text-5xl">
            {profile.IMC.imc.toFixed(2)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            {availableIMC(profile.IMC.imc)}
          </p>
        </CardContent>
      </Card>
      <Button className="w-full mt-4">
        Editar suas informações
      </Button>
    </>
  )
}
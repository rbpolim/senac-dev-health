import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"

import { prisma } from "@/lib/prisma"

import { IMCClient } from "./imc-client"

export default async function IMC() {
  const user = await currentUser()

  if (!user) {
    redirect("/")
  }

  const profileIMC = await prisma.iMC.findFirstOrThrow({
    where: {
      profileId: user.id
    }
  })

  return <IMCClient data={profileIMC} />
}
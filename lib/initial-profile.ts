import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma"

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const profile = await prisma.profile.findFirst({
    where: {
      userId: user.id,
    }
  })

  if (!profile) {
    await prisma.profile.create({
      data: {
        userId: user.id,
        email: user.emailAddresses[0].emailAddress,
      }
    })
  }

  const userAlreadyHasProfileIMC = await prisma.iMC.findFirst({
    where: {
      profileId: user.id,
    }
  })

  if (!!userAlreadyHasProfileIMC) {
    return redirect("/home");
  }

  return
}
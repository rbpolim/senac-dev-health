import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma"

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
    return await prisma.profile.create({
      data: {
        userId: user.id,
        email: user.emailAddresses[0].emailAddress,
      }
    })
  }

  return redirect("/home");
}
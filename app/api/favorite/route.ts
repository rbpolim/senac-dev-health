import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function PUT(
  req: Request,
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    // const {} = body
    console.log(body)

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // if (!height) {
    //   return new NextResponse('Height is required', { status: 400 })
    // }

    const profile = await prisma.profile.findUnique({
      where: {
        userId: userId,
      }
    })

    if (!profile) {
      return new NextResponse('Profile not found', { status: 400 })
    }

    return NextResponse.json({ message: 'OK' })
  } catch (error) {
    console.error('[FAVORITE_PUT]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
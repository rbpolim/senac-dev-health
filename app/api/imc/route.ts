import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const {
      name,
      gender,
      height,
      weight,
    } = body

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!gender) {
      return new NextResponse('Gender is required', { status: 400 })
    }

    if (!height) {
      return new NextResponse('Height is required', { status: 400 })
    }

    if (!weight) {
      return new NextResponse('Weight is required', { status: 400 })
    }

    const profile = await prisma.profile.findUnique({
      where: {
        userId: userId,
      }
    })

    if (!profile) {
      return new NextResponse('Profile not found', { status: 400 })
    }

    const formatHeight = height.replace(',', '.')
    const formatWeight = weight.replace(',', '.')

    const calculateIMC = formatWeight / (formatHeight * formatHeight) // Calculate IMC

    const imc = await prisma.iMC.create({
      data: {
        name,
        gender: gender === "MALE" ? "MALE" : "FEMALE",
        heightInCentimeters: formatHeight * 100,
        weightInGrams: formatWeight * 1000,
        imc: calculateIMC,
        profileId: userId,
      }
    })

    return NextResponse.json(imc)
  } catch (error) {
    console.error('[IMC_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function PUT(
  req: Request,
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { height, weight } = body

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!height) {
      return new NextResponse('Height is required', { status: 400 })
    }

    if (!weight) {
      return new NextResponse('Weight is required', { status: 400 })
    }

    const profile = await prisma.profile.findUnique({
      where: {
        userId: userId,
      }
    })

    if (!profile) {
      return new NextResponse('Profile not found', { status: 400 })
    }

    const formatHeight = height.replace(',', '.')
    const formatWeight = weight.replace(',', '.')

    const calculateIMC = formatWeight / (formatHeight * formatHeight) // Calculate IMC

    const imc = await prisma.iMC.update({
      where: {
        profileId: userId,
      },
      data: {
        heightInCentimeters: formatHeight * 100,
        weightInGrams: formatWeight * 1000,
        imc: calculateIMC,
      }
    })

    return NextResponse.json(imc)
  } catch (error) {
    console.error('[IMC_PUT]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
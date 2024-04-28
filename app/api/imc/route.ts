import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs/server'

import prisma from "@/lib/prisma"

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const {
      name,
      gender,
      dateOfBirth,
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

    if (!dateOfBirth) {
      return new NextResponse('Date of Birth is required', { status: 400 })
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
      return new NextResponse('Weight is required', { status: 400 })
    }

    const formatHeight = height.replace(',', '.')
    const formatWeight = weight.replace(',', '.')

    const heightInCentimeters = formatHeight * 100 // Get height in centimeters
    const weightInGrams = formatWeight * 100 // Get weight in grams
    const calculateIMC = formatWeight / (formatHeight * formatHeight) // Calculate IMC  

    const imc = await prisma.iMC.create({
      data: {
        name,
        dateOfBirth,
        gender: gender === "MALE" ? "MALE" : "FEMALE",
        heightInCentimeters,
        weightInGrams,
        imc: calculateIMC,
        profileId: profile.id,
      }
    })

    return NextResponse.json(imc)
  } catch (error) {
    console.error('[IMC_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
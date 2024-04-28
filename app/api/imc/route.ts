import { NextResponse } from "next/server"
// import { auth } from '@clerk/nextjs'

import prisma from "@/lib/prisma"
import { profile } from "console"

export async function POST(
  req: Request,
) {
  try {
    // const { userId } = auth()
    const body = await req.json()

    const {
      name,
      gender,
      dateOfBirth,
      height,
      weight,
    } = body

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 401 })
    // }

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

    const heightInCentimeters = Number(height) * 100
    const weightInCentimeters = Number(weight) * 100
    const calculateIMC = weight / (height * height)

    console.log({ heightInCentimeters, weightInCentimeters, calculateIMC })
    console.log(body)

    const imc = await prisma.iMC.create({
      data: {
        name,
        dateOfBirth: new Date(dateOfBirth),
        gender: "MALE",
        heightInCentimeters: 2,
        weightInGrams: 2,
        imc: 0.14,
        profileId: "clvjzkkos000213rorgnw07ut",
      }
    })

    console.log(imc)

    // return NextResponse.json(imc)
    return NextResponse.json({ message: 'OK' })
  } catch (error) {
    console.error('[IMC_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
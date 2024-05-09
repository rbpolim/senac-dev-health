'use client'

import { useState } from "react"
import { IMC } from "@prisma/client"

import { availableIMC } from "@/utils/available-imc"

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ModalProfileIMCForm } from "@/components/modal-profile-imc-form"

type Props = {
  data: IMC
}

export function IMCClient({ data }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ModalProfileIMCForm
        isOpen={open}
        onClose={() => setOpen(false)}
        initialValues={data}
      />
      {/* TODO: Replace to a single component (imc-card) */}
      <Card>
        <CardHeader>
          <CardDescription>Seu IMC é:</CardDescription>
          <CardTitle className="text-5xl">
            {data.imc.toFixed(2)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            {availableIMC(data.imc)}
          </p>
        </CardContent>
      </Card>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full mt-4"
      >
        Editar suas informações
      </Button>
    </>
  )
} 
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

      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-emerald-900">
          Meu IMC
        </h2>

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
      </div>
    </>
  )
} 
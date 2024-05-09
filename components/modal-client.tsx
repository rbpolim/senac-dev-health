'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ModalProfileIMC } from "@/components/modal-profile-imc-form"

export function ModalClient() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full mb-4"
      >
        Editar suas informações
      </Button>
      <ModalProfileIMC
        isOpen={open}
        onClose={() => setOpen(false)}
        loading={loading}
      />
    </>
  )
}
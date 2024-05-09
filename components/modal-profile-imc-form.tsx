import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IMC } from "@prisma/client";
import { toast } from "sonner";
import { z } from "zod";
import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/modal";

const formSchema = z.object({
  height: z.string().trim().min(2).max(5),
  weight: z.string().trim().min(2).max(3),
})

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialValues: IMC;
}

export function ModalProfileIMCForm({
  isOpen,
  onClose,
  initialValues
}: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const formattedInitialValues = {
    height: String(initialValues.heightInCentimeters / 100),
    weight: String(initialValues.weightInGrams / 1000),
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: formattedInitialValues.height || "",
      weight: formattedInitialValues.weight || "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true)

      await axios.put("/api/imc", values)

      window.location.reload()
      onClose()
      form.reset()
      toast.success("Dados atualizados com sucesso.")
    } catch (err) {
      console.error(err)
      toast.error("Ocorreu um erro ao editar os dados.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title="Editar informações"
      description="Atualize suas informações para calcular seu IMC."
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Altura (ex.: 1,70)</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Digite aqui"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso (ex.: 82,5)</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Digite aqui"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end space-x-2">
            <Button
              disabled={isLoading}
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Atualizar
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  )
}
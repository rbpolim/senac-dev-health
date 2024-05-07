import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner"
import { z } from "zod";

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
  loading: boolean;
}

export function ModalProfileIMC({
  isOpen,
  onClose,
  loading
}: Props) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "",
      weight: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // TODO: Atualizar na API
      console.log(data)
      toast.success("Dados atualizados com sucesso.")
      form.reset()
      onClose()
    } catch (err) {
      console.error(err)
      toast.error("Ocorreu um erro ao editar os dados.")
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
                  <Input placeholder="Digite aqui" {...field} />
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
                  <Input placeholder="Digite aqui" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end space-x-2">
            <Button
              disabled={loading}
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button disabled={loading} type="submit">
              Atualizar
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  )
}
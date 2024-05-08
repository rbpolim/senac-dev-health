'use client'

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = React.HTMLAttributes<HTMLButtonElement>

export function ButtonBack({ ...rest }: Props) {
  const router = useRouter()

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => router.back()}
      {...rest}
    >
      <ChevronLeft className='h-8 w-8' />
    </Button>
  )
}
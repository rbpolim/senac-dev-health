import { Button } from "@/components/ui/button";

type Props = {
  title: string
  isActive?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export function ButtonCategory({
  title,
  isActive = false,
  ...rest
}: Props) {
  return (
    <Button
      size="sm"
      variant={isActive ? 'default' : 'outline'}
      {...rest}
    >
      {title}
    </Button>
  )
}
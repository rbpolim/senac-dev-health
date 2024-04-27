export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear()

  return (
    <div className="h-20 w-full flex items-center justify-center border-t">
      <h1 className="text-muted-foreground">
        SENAC © {currentYear} Dev Health
      </h1>
    </div>
  )
}
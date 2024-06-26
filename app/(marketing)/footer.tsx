export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear()

  return (
    <footer className="h-20 w-full flex items-center justify-center border-t">
      <h2 className="text-muted-foreground">
        SENAC © {currentYear} Dev Health
      </h2>
    </footer>
  )
}
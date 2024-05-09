export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear()

  return (
    <footer className="backdrop-blur-sm flex items-center justify-center fixed bottom-0 h-12 border-t w-full bg-white">
      <h2 className="text-muted-foreground">
        SENAC © {currentYear} Dev.Health
      </h2>
    </footer>
  )
}
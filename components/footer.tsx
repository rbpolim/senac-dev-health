import Link from "next/link";

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear()

  return (
    <footer className="backdrop-blur-sm flex flex-col gap-1 items-center fixed bottom-0 p-4 border-t w-full bg-white">
      <h2 className="text-sm ">
        <Link href="/about" className="underline text-emerald-900">
          SENAC
        </Link>
        {' '} © {currentYear} Dev.Health
      </h2>
      <p className="text-xs text-muted-foreground">
        Projeto Integrador: Parte 2
      </p>
    </footer>
  )
}
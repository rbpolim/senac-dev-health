import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center fixed bottom-0 p-3 border-t w-full bg-white">
      <Image
        src="/logo-senac.png"
        alt="Logo SENAC"
        width={60}
        height={60}
      />
      <p className="text-sm text-muted-foreground">
        Projeto Integrador Parte 2
      </p>
    </footer>
  )
}
import Image from "next/image";

import cookHeroImg from '@/public/cook.svg'

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-3xl px-16 font-black text-primary uppercase text-start">
        Bem vindo ao Dev.Health!
      </h1>
      <Image
        src={cookHeroImg}
        alt="2 girls Cook illustration"
        width={200}
        className="object-contain mt-10"
      />
      <p className="text-muted-foreground/80 text-center w-[280px] mt-4 font-medium">
        Aprenda a cozinhar pratos deliciosos com os melhores chefs do SENAC. 😁
      </p>
    </div>
  )
}
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { Logo } from "@/components/logo"

export const Sidebar = () => {
  const pathname = usePathname()

  const routes = [
    {
      label: "HOME",
      path: "/home",
      isActive: pathname === "/home"
    },
    {
      label: "RECEITAS",
      path: "/receipts",
      isActive: pathname === "/receipts"
    },
    {
      label: "MEU IMC",
      path: "/imc",
      isActive: pathname === "/imc"
    },
  ]

  return (
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-sm">
      <div className="p-8">
        <Logo />
      </div>
      <nav className="flex flex-col gap-y-8 items-start mt-10 transition grow text-center">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              'w-full text-[#52665A] p-6 text-3xl',
              route.isActive && 'font-bold'
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
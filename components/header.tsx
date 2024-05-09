import { UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { MobileSidebar } from "@/components/mobile-sidebar";

export function Header() {
  return (
    <header className='bg-[#F5FAF7] border-b z-50 fixed top-0 w-full px-4 h-20 flex items-center justify-between'>
      <MobileSidebar />
      <div className='flex items-center gap-x-6'>
        <Logo />
        <UserButton />
      </div>
    </header>
  )
}
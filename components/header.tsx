import { UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { MobileSidebar } from "@/components/mobile-sidebar";

export function Header() {
  return (
    <header className='bg-white border-b z-50 fixed top-0 w-full px-4 h-20 flex items-center justify-between'>
      <MobileSidebar />
      <div className='md:w-full flex items-center justify-between gap-x-6'>
        <Logo />
        <UserButton />
      </div>
    </header>
  )
}
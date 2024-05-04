import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { Menu } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Categories } from '@/components/categories';
import { MobileSidebar } from '@/components/mobile-sidebar';

export default async function Home() {
  // TODO: Trocar essa estrutura para o layout (HomeLayout)
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="px-4 min-h-screen bg-[#F5FAF7] py-8 space-y-8">
      {/* HEADER COMPONENT */}
      <div className='w-full flex items-center justify-between'>
        <MobileSidebar />
        <Logo />
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <span className='text-2xl font-light'>Olá, </span>
          <h1 className="font-black text-3xl text-[#065F46] mb-4">
            {user.firstName}
          </h1>
        </div>
        <Avatar className='w-14 h-14'>
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{user.firstName}</AvatarFallback>
        </Avatar>
      </div>
      <div className=''>
        <Categories />
      </div>
    </div>
  )
}
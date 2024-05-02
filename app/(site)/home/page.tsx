import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="px-4 min-h-screen bg-[#F5FAF7]">
      <div className='w-full flex items-center justify-between'>
        <div>
          <span className='text-4xl font-light'>Olá, </span>
          <h1 className="font-black text-4xl text-center text-[#065F46] mb-4">
            {user.firstName}
          </h1>
        </div>
        <Avatar className='w-20 h-20'>
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{user.firstName}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
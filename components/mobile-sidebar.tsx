import { AlignLeft } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from '@/components/sidebar';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="transition md:hidden hover:opacity-75">
        <AlignLeft className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
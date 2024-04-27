import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="h-20 w-full flex items-center justify-center border-b">
      <div className="max-w-2xl px-4 w-full flex items-center justify-between">
        <Logo />
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              fallbackRedirectUrl="/profile"
            >
              <Button size='lg' variant="secondary">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  )
}
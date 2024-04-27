import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import { Toaster } from "@/components/ui/sonner"

import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-Health",
  description: "A health app for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jost.className}>{children}</body>
        <Toaster />
      </html>
    </ClerkProvider>
  );
}

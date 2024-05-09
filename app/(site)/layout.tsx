import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <main className="min-h-screen w-full bg-[#F5FAF7]">
      <Header />
      <div className="px-4 pt-24 pb-40">
        {children}
      </div>
      <Footer />
    </main>
  );
}

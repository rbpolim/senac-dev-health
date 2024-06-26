import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await currentUser();

  // if (!user) {
  //   redirect("/");
  // }

  return (
    <main className="min-h-screen flex flex-col">
      {children}
    </main>
  );
}

import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function OnBoardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await currentUser();

  // if (!user) {
  //   redirect("/");
  // }

  return (
    <main className="h-full">
      {children}
    </main>
  );
}

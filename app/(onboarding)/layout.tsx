export default async function OnBoardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full">
      {children}
    </main>
  );
}

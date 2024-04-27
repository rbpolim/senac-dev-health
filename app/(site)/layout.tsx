export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <h1>HOME LAYOUT</h1>
      {children}
    </main>
  );
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow pt-[80px] max-w-[1440px] mx-auto w-full px-margin-mobile md:px-margin-desktop pb-xl relative">
      {children}
    </main>
  );
}

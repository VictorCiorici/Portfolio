export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow pt-[80px] max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 pb-xl relative">
      {children}
    </main>
  );
}

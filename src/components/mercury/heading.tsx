export function MercuryHeading({ children }: { children: string }) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-5 bg-[#0A0E17]/85 px-6 py-4 font-mono text-[11px] font-semibold tracking-[0.22em] text-[#F1F5F9] uppercase backdrop-blur lg:sr-only">
      {children}
    </h2>
  );
}

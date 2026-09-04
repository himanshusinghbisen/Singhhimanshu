export function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-4 text-sm font-bold tracking-widest text-slate-200 uppercase backdrop-blur lg:sr-only">
      {children}
    </h2>
  );
}

export function SectionHeading({
  children,
  index,
}: {
  children: string;
  index?: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3 border-b border-rule pb-3 lg:border-0 lg:pb-0">
      {index ? (
        <span className="font-journal text-sm italic text-amber-mark">
          {index}
        </span>
      ) : null}
      <h2 className="font-journal text-2xl font-semibold tracking-tight text-ink sticky top-0 z-20 -mx-6 bg-parchment/90 px-6 py-3 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0">
        {children}
      </h2>
    </div>
  );
}

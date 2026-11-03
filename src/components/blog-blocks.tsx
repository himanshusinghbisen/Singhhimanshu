import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { headingAnchorId } from "@/components/payer-article-enhancements";
import type { BlogBlock } from "@/lib/posts";

export function BlogBlocks({
  blocks,
  theme = "journal",
}: {
  blocks: BlogBlock[];
  theme?: "journal" | "mercury";
}) {
  const isMercury = theme === "mercury";

  return (
    <div className="mt-10 space-y-6">
      {blocks.map((block, index) => {
        if (typeof block === "string") {
          return (
            <p
              key={`p-${index}-${block.slice(0, 24)}`}
              className={cn(
                "text-[17px] leading-[1.75]",
                isMercury ? "text-[#94A3B8]" : "text-ink/75",
              )}
            >
              {block}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2
              key={`h-${index}-${block.text}`}
              id={headingAnchorId(block.text)}
              className={cn(
                "pt-6 text-2xl leading-tight font-semibold tracking-tight",
                isMercury ? "text-[#F1F5F9]" : "font-journal text-ink",
              )}
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "code") {
          return (
            <figure key={`code-${index}`} className={cn("overflow-hidden border", isMercury ? "rounded-xl border-[#23334D] bg-[#101827]" : "rounded-sm border-rule bg-[#172033]")}>
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">{block.language}</span>
                <span className="text-[11px] text-white/45">Example</span>
              </div>
              <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-[#E5E7EB]"><code>{block.code}</code></pre>
              {block.caption ? <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-white/60">{block.caption}</figcaption> : null}
            </figure>
          );
        }

        if (block.type === "links") {
          return (
            <ul key={`links-${index}`} className="space-y-3">
              {block.items.map((item) => {
                const internal =
                  item.href.startsWith("/") || item.href.startsWith("#");
                const className = cn(
                  "font-medium underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark",
                  isMercury ? "text-[#00D2D3]" : "text-navy-link",
                );
                return (
                  <li key={item.href}>
                    {internal ? (
                      <Link href={item.href} className={className}>
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <figure
            key={`fig-${block.src}`}
            className={cn(
              "overflow-hidden border",
              isMercury
                ? "rounded-xl border-[#23334D] bg-[#161F30]"
                : "rounded-sm border-rule bg-card",
            )}
          >
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={800}
              className="h-auto w-full"
            />
            {block.caption ? (
              <figcaption
                className={cn(
                  "border-t px-4 py-3 text-sm",
                  isMercury
                    ? "border-[#23334D] text-[#94A3B8]"
                    : "border-rule text-ink/65",
                )}
              >
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}

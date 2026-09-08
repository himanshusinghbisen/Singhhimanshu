import Image from "next/image";

import { cn } from "@/lib/utils";
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

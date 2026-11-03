import { JsonLdScript } from "@/components/json-ld";
import { postImage, type BlogPost } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const imagePath = postImage(post);
  const image = imagePath.startsWith("http")
    ? imagePath
    : `${siteUrl}${imagePath}`;

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        headline: post.title,
        description: post.seoDescription ?? post.summary,
        author: { "@id": `${siteUrl}/#person` },
        publisher: { "@id": `${siteUrl}/#person` },
        datePublished: post.date,
        dateModified: post.dateModified ?? post.date,
        image: [image],
        inLanguage: "en-US",
      }}
    />
  );
}

import { profile } from "@/lib/data";
import { seo, siteName, siteUrl } from "@/lib/site";

export function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function JsonLd() {
  const personId = `${siteUrl}/#person`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: profile.firstName,
        url: `${siteUrl}/about`,
        image: `${siteUrl}/images/himanshu-singh-headshot.jpg`,
        email: profile.email,
        telephone: profile.phone,
        jobTitle: profile.title,
        description:
          "Healthcare Systems Architect focused on payer platforms, claims processing, payment integrity, and enterprise architecture.",
        homeLocation: {
          "@type": "Place",
          name: "Dallas–Fort Worth, Texas, USA",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dallas",
          addressRegion: "TX",
          addressCountry: "US",
        },
        sameAs: [profile.linkedin, profile.github, profile.goodreads],
        knowsAbout: [
          "Healthcare Systems Architecture",
          "Healthcare Payer Systems",
          "Claims Processing",
          "Payment Integrity",
          "Claims Recovery",
          "Enterprise Architecture",
          "Data Architecture",
          "Cloud Modernization",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        alternateName: "singhhimanshu.com",
        description: seo.description,
        publisher: { "@id": personId },
        inLanguage: "en-US",
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export function ProfilePageJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${siteUrl}/about#profile`,
        url: `${siteUrl}/about`,
        name: "About Himanshu Singh",
        mainEntity: { "@id": `${siteUrl}/#person` },
      }}
    />
  );
}

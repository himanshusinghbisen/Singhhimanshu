import { profile } from "@/lib/data";
import { seo, siteUrl } from "@/lib/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    givenName: profile.firstName,
    url: siteUrl,
    image: `${siteUrl}/images/himanshu-singh-headshot.jpg`,
    email: profile.email,
    telephone: profile.phone,
    jobTitle: [...seo.roles],
    description: seo.description,
    homeLocation: {
      "@type": "Place",
      name: "Dallas–Fort Worth, Texas, USA",
    },
    birthPlace: {
      "@type": "Place",
      name: "Gorakhpur, Uttar Pradesh, India",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    sameAs: [profile.linkedin, profile.github, profile.goodreads],
    knowsAbout: [
      "Software architecture",
      "Healthcare payment integrity",
      "Claims systems",
      "Enterprise architecture",
      ".NET",
      "Cloud engineering",
      "Technology consulting",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} · Engineering Journal`,
    description: seo.description,
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en-US",
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: seo.title,
    description: seo.description,
    mainEntity: { "@id": `${siteUrl}/#person` },
    about: { "@id": `${siteUrl}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}

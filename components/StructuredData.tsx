import { hospital, type Doctor } from "@/data/hospital";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hospital-smi.vercel.app";
const address = {
  "@type": "PostalAddress",
  streetAddress: hospital.address,
  addressLocality: "Rincón de Romos",
  addressRegion: "Aguascalientes",
  postalCode: hospital.postalCode,
  addressCountry: "MX",
};
export function StructuredData({ doctor }: { doctor?: Doctor }) {
  const data = doctor
    ? {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        url: `${siteUrl}/medicos/${doctor.slug}`,
        medicalSpecialty: doctor.specialty,
        ...(doctor.image ? { image: `${siteUrl}${doctor.image}` } : {}),
        worksFor: {
          "@type": "Hospital",
          "@id": `${siteUrl}/#hospital`,
          name: hospital.shortName,
        },
        address,
        identifier: doctor.licenses
          .filter((l) => l.published && l.verification === "verified")
          .map((l) => ({
            "@type": "PropertyValue",
            name: l.label,
            value: l.number,
          })),
      }
    : {
        "@context": "https://schema.org",
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.shortName,
        url: siteUrl,
        telephone: hospital.phoneHref,
        address,
        openingHours: "Mo-Su 00:00-23:59",
      };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

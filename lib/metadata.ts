import type { Metadata } from "next";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Hospital SMI`,
      description,
      url: path,
      type: "website",
      locale: "es_MX",
      siteName: "Hospital SMI",
    },
  };
}

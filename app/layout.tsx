import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ActionBar } from "@/components/ActionBar";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], display: "swap" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hospital-smi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hospital SMI | Atención médica en Rincón de Romos",
    template: "%s | Hospital SMI",
  },
  description:
    "Hospital privado en Rincón de Romos, Aguascalientes. Conoce las especialidades médicas, el directorio y cómo comunicarte con Hospital SMI.",
  applicationName: "Hospital SMI",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Hospital SMI",
    title: "Hospital SMI | Atención médica en Rincón de Romos",
    description:
      "Atención médica cercana y especialidades en Rincón de Romos, Aguascalientes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={geist.className}>
      <body>
        <a className="skip-link" href="#main-content">
          Ir al contenido
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ActionBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

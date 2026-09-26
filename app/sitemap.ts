import type { MetadataRoute } from "next";
import { publicDoctors, publicSpecialties } from "@/data/hospital";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hospital-smi.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    "",
    "/hospital",
    "/especialidades",
    "/medicos",
    "/servicios",
    "/cirugia",
    "/ginecologia-obstetricia",
    "/pediatria",
    "/pacientes",
    "/seguros-convenios",
    "/contacto",
  ];
  const dynamic = [
    ...publicSpecialties.map((item) => `/especialidades/${item.slug}`),
    ...publicDoctors.map((item) => `/medicos/${item.slug}`),
  ];
  return [...fixed, ...dynamic].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

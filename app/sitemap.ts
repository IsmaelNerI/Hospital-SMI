import type { MetadataRoute } from "next";
import { publicDoctors, publicSpecialties } from "@/data/hospital";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hospital-smi.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/hospital", "/hospital/historia", "/hospital/instalaciones", "/especialidades", "/medicos", "/servicios", "/cirugia", "/ginecologia-obstetricia", "/pediatria", "/pacientes", "/seguros-convenios", "/contacto", "/aviso-de-privacidad"];
  const dynamic = [...publicSpecialties.map((item) => `/especialidades/${item.slug}`), ...publicDoctors.map((item) => `/medicos/${item.slug}`)];
  return [...fixed, ...dynamic].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.7 }));
}

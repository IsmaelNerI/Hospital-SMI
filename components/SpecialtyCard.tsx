import Link from "next/link";
import {
  ArrowUpRight,
  Baby,
  Eye,
  HeartPulse,
  Stethoscope,
  Activity,
  Accessibility,
  Scan,
  Microscope,
} from "lucide-react";
import type { Specialty } from "@/data/hospital";
const icons = {
  "medicina-interna": Stethoscope,
  pediatria: Baby,
  "ginecologia-obstetricia": HeartPulse,
  urologia: Activity,
  oftalmologia: Eye,
  "cirugia-general": Microscope,
  coloproctologia: Scan,
  "geriatria-gerontologia": Accessibility,
};
export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  const Icon = icons[specialty.slug as keyof typeof icons] ?? Stethoscope;
  return (
    <Link href={`/especialidades/${specialty.slug}`} className="specialty-card">
      <Icon size={28} strokeWidth={1.5} />
      <h3>{specialty.name}</h3>
      <p>{specialty.description}</p>
      <span className="specialty-link">
        Conocer especialidad <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}

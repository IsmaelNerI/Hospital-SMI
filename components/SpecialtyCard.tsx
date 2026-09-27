import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publicDoctors, type Specialty } from "@/data/hospital";
export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  const count = publicDoctors.filter(
    (d) =>
      d.specialty.includes(specialty.name) || d.areas.includes(specialty.name),
  ).length;
  return (
    <Link href={`/especialidades/${specialty.slug}`} className="specialty-card">
      <span className="specialty-count">
        {count} {count === 1 ? "especialista" : "especialistas"}
      </span>
      <h3>{specialty.name}</h3>
      <p>{specialty.description}</p>
      <span className="specialty-link">
        Conocer especialidad <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}

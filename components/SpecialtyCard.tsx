import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Specialty } from "@/data/hospital";

export function SpecialtyCard({ specialty, index }: { specialty: Specialty; index: number }) {
  return <Link href={`/especialidades/${specialty.slug}`} className="specialty-card"><span className="specialty-index">0{index + 1}</span><span className="specialty-plus"><Plus size={17} /></span><h3>{specialty.name}</h3><p>{specialty.description}</p><span className="specialty-link">Conocer especialidad <ArrowUpRight size={14} /></span></Link>;
}

import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { publicSpecialties } from "@/data/hospital";

export const metadata: Metadata = { title: "Especialidades médicas", description: "Consulta las especialidades médicas vinculadas con Hospital SMI en Rincón de Romos." };

export default function SpecialtiesPage() {
  return <InnerPage eyebrow="Especialidades" title="Especialidades médicas en Rincón de Romos" intro="Conoce las áreas de atención médica vinculadas con Hospital SMI y consulta disponibilidad directamente con el hospital."><section className="section"><div className="wrap"><div className="specialty-grid">{publicSpecialties.map((specialty, index) => <SpecialtyCard key={specialty.slug} specialty={specialty} index={index}/>)}</div><p className="fine-print">Cada especialista confirma los servicios y procedimientos que realiza. Esta lista describe áreas médicas vinculadas y no representa un catálogo de procedimientos hospitalarios.</p></div></section></InnerPage>;
}

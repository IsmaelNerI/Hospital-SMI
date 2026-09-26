import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Doctor } from "@/data/hospital";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return <article className="doctor-card"><div className="doctor-avatar"><span>{doctor.initials}</span><i /></div><div className="doctor-meta"><span className="doctor-specialty">{doctor.specialty}</span><h3>{doctor.name}</h3><p>Consulta disponibilidad directamente con el hospital.</p><Link href={`/medicos/${doctor.slug}`}>Ver perfil <ArrowUpRight size={14} /></Link></div></article>;
}

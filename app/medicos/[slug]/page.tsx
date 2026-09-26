import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";
import { hospital, publicDoctors } from "@/data/hospital";

export function generateStaticParams() { return publicDoctors.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = publicDoctors.find((item) => item.slug === slug);
  return doctor ? { title: doctor.name, description: `${doctor.specialty} vinculado con Hospital SMI en Rincón de Romos.` } : {};
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = publicDoctors.find((item) => item.slug === slug);
  if (!doctor) notFound();
  return <InnerPage eyebrow={`Directorio · ${doctor.specialty}`} title={doctor.name} intro={doctor.specialty}><section className="section"><div className="wrap profile-layout"><div className="profile-avatar">{doctor.initials}<span>SMI</span></div><div><span className="micro-label">PERFIL MÉDICO</span><h2 className="detail-heading">Atención por <em>especialidad.</em></h2><p className="detail-copy">Este profesional está vinculado con Hospital SMI. Para conocer su disponibilidad, horario de consulta, formación y servicios, comunícate directamente con el hospital.</p>{doctor.areas.length > 0 && <div className="profile-areas"><b>Áreas profesionales relacionadas</b><ul>{doctor.areas.map((area) => <li key={area}>{area}</li>)}</ul></div>}<p className="medical-disclaimer">Los servicios y procedimientos dependen del especialista y deben confirmarse directamente. No contamos con horarios verificados para publicar en este perfil.</p><a className="button button-dark" href={`tel:${hospital.phoneHref}`}><Phone size={16}/> Consultar disponibilidad</a></div></div></section></InnerPage>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";
import { DoctorCard } from "@/components/DoctorCard";
import { hospital, publicDoctors, publicSpecialties } from "@/data/hospital";

export function generateStaticParams() { return publicSpecialties.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const specialty = publicSpecialties.find((item) => item.slug === slug);
  return specialty ? { title: specialty.name, description: `${specialty.name} en Hospital SMI, Rincón de Romos. Consulta información y disponibilidad.` } : {};
}

export default async function SpecialtyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialty = publicSpecialties.find((item) => item.slug === slug);
  if (!specialty) notFound();
  const related = publicDoctors.filter((doctor) => doctor.specialty.toLowerCase().includes(specialty.name.split(" ")[0].toLowerCase()) || doctor.areas.some((area) => area.toLowerCase() === specialty.name.toLowerCase()));
  return <InnerPage eyebrow={`Especialidades · ${specialty.name}`} title={specialty.name} intro={specialty.description}><section className="section"><div className="wrap detail-layout"><div><span className="micro-label">SOBRE ESTA ESPECIALIDAD</span><h2 className="detail-heading">Una valoración<br/>con el <em>especialista.</em></h2><p className="detail-copy">La especialidad está vinculada con profesionales que atienden en Hospital SMI. Para saber qué tipo de consulta o procedimiento realiza cada médico, contacta directamente con el especialista o con recepción.</p><div className="care-note"><b>¿Cuándo considerar una valoración?</b><p>Si buscas orientación médica relacionada con esta área, llama al hospital para conocer disponibilidad y el siguiente paso adecuado.</p></div><a className="button button-dark" href={`tel:${hospital.phoneHref}`}><Phone size={16}/> Consultar disponibilidad</a></div><aside className="related-panel"><span className="micro-label">MÉDICOS VINCULADOS</span>{related.length ? related.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor}/>) : <p>Comunícate con el hospital para consultar información de especialistas.</p>}<Link className="text-link" href="/medicos">Ver directorio completo <ArrowRight size={15}/></Link></aside></div><div className="wrap medical-disclaimer">La información de este sitio es general y no sustituye una consulta médica, diagnóstico ni tratamiento. En caso de emergencia, contacta a los servicios de emergencia de tu localidad.</div></section></InnerPage>;
}

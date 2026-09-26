import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DoctorCard } from "./DoctorCard";
import { CallButton, LocationSection } from "./Sections";
import { publicDoctors, type Specialty } from "@/data/hospital";
export function SpecialtyDetail({
  specialty,
  title,
  description,
}: {
  specialty: Specialty;
  title?: string;
  description?: string;
}) {
  const related = publicDoctors.filter(
    (d) =>
      d.specialty.includes(specialty.name) || d.areas.includes(specialty.name),
  );
  return (
    <>
      <section className="specialty-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <Link href="/especialidades">Especialidades</Link>
            <span>/</span>
            <span>{specialty.name}</span>
          </nav>
          <div className="specialty-detail-layout">
            <div>
              <span className="eyebrow">{specialty.name}</span>
              <h1>{title ?? specialty.name}</h1>
              <p className="lead">{description ?? specialty.description}</p>
              <CallButton label="Consultar disponibilidad" />
            </div>
            <aside className="appointment-card">
              <span className="eyebrow">TU CONSULTA</span>
              <h2>Atención con el especialista.</h2>
              <p>
                Consulta horarios y disponibilidad directamente con Hospital
                SMI. Pregunta por los requisitos para tu visita.
              </p>
              <Link className="text-link" href="/pacientes">
                Prepara tu visita <ArrowRight size={18} />
              </Link>
            </aside>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DIRECTORIO MÉDICO</span>
              <h2>Especialistas en {specialty.name.toLowerCase()}</h2>
            </div>
          </div>
          <div className="doctor-grid">
            {related.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </div>
      </section>
      <LocationSection />
    </>
  );
}

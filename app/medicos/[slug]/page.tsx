import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import { DoctorIdentity } from "@/components/DoctorCard";
import { CallButton } from "@/components/Sections";
import { StructuredData } from "@/components/StructuredData";
import { hospital, publicDoctors, publicDoctorData } from "@/data/hospital";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return publicDoctors.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = publicDoctors.find((d) => d.slug === slug);
  return doctor
    ? pageMetadata(
        `${doctor.name} · ${doctor.specialty}`,
        `Formación, cédulas y áreas profesionales de ${doctor.name}. ${doctor.specialty} en Hospital SMI, Rincón de Romos.`,
        `/medicos/${slug}`,
      )
    : {};
}
const dateLabel = (date: string) =>
  date.length === 4
    ? date
    : new Date(`${date}T12:00:00Z`).toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = publicDoctors.find((d) => d.slug === slug);
  if (!record) notFound();
  const doctor = publicDoctorData(record);
  return (
    <div className="wrap profile-page">
      <StructuredData doctor={doctor} />
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/medicos">Directorio médico</Link>
        <span>/</span>
        <span>Perfil médico</span>
      </nav>
      <header className="medical-profile-header">
        <DoctorIdentity doctor={doctor} />
        <div>
          <span className="eyebrow">{doctor.specialty}</span>
          <h1>{doctor.name}</h1>
          <p className="profile-subtitle">
            Hospital SMI · Rincón de Romos, Aguascalientes
          </p>
          <CallButton label="Consultar disponibilidad" />
        </div>
      </header>
      <div className="medical-profile-body">
        <article>
          <section className="medical-section">
            <span className="eyebrow">PERFIL PROFESIONAL</span>
            <h2>Acerca del especialista</h2>
            <p>
              {doctor.name} forma parte del directorio de Hospital SMI en el
              área de {doctor.specialty.toLowerCase()}. Aquí puedes consultar su
              formación y las credenciales profesionales publicadas.
            </p>
          </section>
          {!!doctor.education?.length && (
            <section className="medical-section">
              <h2>Formación</h2>
              <ul className="education-list">
                {doctor.education.map((e, i) => (
                  <li key={i}>
                    <h3>{e.title}</h3>
                    {e.institution && <p>{e.institution}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {!!doctor.licenses.length && (
            <section className="medical-section">
              <h2>Cédulas profesionales</h2>
              <dl className="credential-list">
                {doctor.licenses.map((l) => (
                  <div key={l.number}>
                    <dt>
                      {l.type === "specialty"
                        ? `Especialidad · ${l.label}`
                        : l.label}
                      {l.type === "other" && (
                        <small>Registro profesional reportado</small>
                      )}
                    </dt>
                    <dd>{l.number}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {!!doctor.certifications?.length && (
            <section className="medical-section">
              <h2>Certificaciones</h2>
              <ul className="education-list">
                {doctor.certifications.map((c) => (
                  <li key={c.name}>
                    <h3>{c.name}</h3>
                    {c.number && <p>Certificado núm. {c.number}</p>}
                    {c.validFrom && c.validUntil && (
                      <p>
                        Periodo publicado: {dateLabel(c.validFrom)} –{" "}
                        {dateLabel(c.validUntil)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {!!doctor.experience?.length && (
            <section className="medical-section">
              <h2>Experiencia profesional</h2>
              {doctor.experience.map((e) => (
                <p key={e.institution}>{e.institution}</p>
              ))}
            </section>
          )}
          <section className="medical-section">
            <h2>Áreas profesionales</h2>
            <ul className="professional-areas">
              {doctor.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </article>
        <aside className="profile-sidebar">
          <div className="appointment-card">
            <span className="eyebrow">TU CONSULTA</span>
            <h2>Prepara tu visita.</h2>
            <p>
              Confirma con el hospital los horarios, la disponibilidad y los
              requisitos de atención del especialista.
            </p>
            <CallButton label="Llamar al hospital" />
            <a className="profile-phone" href={`tel:${hospital.phoneHref}`}>
              {hospital.phone}
            </a>
          </div>
          <div className="profile-location">
            <MapPin size={24} />
            <div>
              <h2>Atención en Hospital SMI</h2>
              <address>
                {hospital.address}
                <br />
                {hospital.city}
              </address>
              <a
                className="text-link"
                href={hospital.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <Link className="text-link" href="/medicos">
            Ver todos los especialistas <ArrowRight size={18} />
          </Link>
        </aside>
      </div>
    </div>
  );
}

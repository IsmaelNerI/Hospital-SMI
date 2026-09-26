import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import { DoctorIdentity } from "@/components/DoctorCard";
import { CallButton } from "@/components/Sections";
import { hospital, publicDoctors } from "@/data/hospital";
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
        doctor.name,
        `${doctor.specialty} en Hospital SMI, Rincón de Romos. Consulta horarios y disponibilidad.`,
        `/medicos/${slug}`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = publicDoctors.find((d) => d.slug === slug);
  if (!doctor) notFound();
  return (
    <div className="wrap profile-page">
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/medicos">Directorio médico</Link>
        <span>/</span>
        <span>Perfil médico</span>
      </nav>
      <div className="profile-layout">
        <article>
          <DoctorIdentity doctor={doctor} />
          <span className="eyebrow">{doctor.specialty}</span>
          <h1>{doctor.name}</h1>
          <section className="profile-areas">
            <h2>Áreas profesionales</h2>
            <ul>
              {doctor.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
          <div className="profile-location">
            <MapPin size={23} />
            <div>
              <h2>Hospital SMI</h2>
              <address>
                {hospital.address}
                <br />
                {hospital.city}
              </address>
              <Link className="text-link" href="/contacto">
                Contacto y ubicación <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </article>
        <aside className="appointment-card">
          <span className="eyebrow">HORARIOS Y DISPONIBILIDAD</span>
          <h2>Consulta con el hospital.</h2>
          <p>
            Comunícate con Hospital SMI para conocer los horarios y
            disponibilidad del especialista.
          </p>
          <CallButton label="Consultar disponibilidad" />
          <p className="appointment-phone">{hospital.phone}</p>
        </aside>
      </div>
    </div>
  );
}

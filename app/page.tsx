import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Stethoscope,
  ClipboardList,
  HeartPulse,
} from "lucide-react";
import { DoctorCard } from "@/components/DoctorCard";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { HospitalPanel } from "@/components/HospitalPanel";
import {
  CallButton,
  SectionHeading,
  HospitalStory,
  CapacitySection,
  LocationSection,
  FinalCta,
} from "@/components/Sections";
import { hospital, publicDoctors, publicSpecialties } from "@/data/hospital";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Atención médica en Rincón de Romos",
  "Hospital SMI brinda atención hospitalaria y distintas especialidades médicas en Rincón de Romos, Aguascalientes.",
  "/",
);
const quickLinks = [
  { title: "Encontrar un especialista", href: "/medicos", icon: Stethoscope },
  { title: "Ver especialidades", href: "/especialidades", icon: HeartPulse },
  {
    title: "Información para pacientes",
    href: "/pacientes",
    icon: ClipboardList,
  },
  { title: "Cómo llegar", href: "/contacto", icon: MapPin },
];
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">HOSPITAL PRIVADO · RINCÓN DE ROMOS</span>
            <h1>
              Atención médica
              <br className="desktop-break" /> cerca de ti.
            </h1>
            <p className="lead">
              Hospital SMI brinda atención hospitalaria y distintas
              especialidades médicas en Rincón de Romos, Aguascalientes.
            </p>
            <div className="hero-actions">
              <CallButton />
              <Link className="button button-outline" href="/especialidades">
                Ver especialidades <ArrowRight size={18} />
              </Link>
            </div>
            <a
              className="hero-directions"
              href={hospital.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} />
              Cómo llegar
            </a>
            <span className="hours">
              <i className="live-dot" />
              Hospital abierto 24 horas
            </span>
          </div>
          <HospitalPanel
            image={{
              src: "/images/hospital/entrada.webp",
              alt: "Entrada de Hospital SMI en Rincón de Romos",
            }}
          />
        </div>
      </section>
      <nav className="wrap quick-links" aria-label="Encuentra tu atención">
        {quickLinks.map(({ title, href, icon: Icon }) => (
          <Link href={href} key={href}>
            <Icon size={25} strokeWidth={1.6} />
            <span>{title}</span>
            <ArrowRight size={18} />
          </Link>
        ))}
      </nav>
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="ESPECIALIDADES"
            title="Atención médica especializada"
            description="Conoce las especialidades y médicos vinculados con Hospital SMI."
          />
          <div className="specialty-grid">
            {publicSpecialties.map((s) => (
              <SpecialtyCard key={s.slug} specialty={s} />
            ))}
          </div>
        </div>
      </section>
      <HospitalStory />
      <CapacitySection />
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="NUESTROS ESPECIALISTAS"
            title="Directorio médico"
            description="Encuentra al especialista y consulta su disponibilidad."
            href="/medicos"
            link="Ver directorio completo"
          />
          <div className="doctor-grid featured-doctors">
            {publicDoctors
              .filter((d) =>
                [
                  "jose-efrain-macias-macias",
                  "juan-ricardo-mendez-arteaga",
                  "baltazar-bertaud-mier",
                  "alfonso-garcia-diosdado",
                ].includes(d.slug),
              )
              .map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="wrap patient-teasers">
          <div>
            <ClipboardList size={30} strokeWidth={1.5} />
            <span className="eyebrow">PARA PACIENTES Y FAMILIAS</span>
            <h2>Prepara tu visita.</h2>
            <p>
              Consulta horarios, disponibilidad y requisitos antes de acudir al
              hospital.
            </p>
            <Link className="text-link" href="/pacientes">
              Información para pacientes <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <span className="eyebrow">SEGUROS Y CONVENIOS</span>
            <h2>Consulta tu cobertura.</h2>
            <p>
              Revisa con el hospital y tu aseguradora las condiciones y
              autorizaciones aplicables a tu póliza.
            </p>
            <Link className="text-link" href="/seguros-convenios">
              Conocer más <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <LocationSection />
      <FinalCta />
    </>
  );
}

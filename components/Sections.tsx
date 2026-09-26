import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock3,
  Check,
} from "lucide-react";
import { hospital } from "@/data/hospital";
export function CallButton({
  label = "Llamar",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-white" : "button-dark"}`}
      href={`tel:${hospital.phoneHref}`}
    >
      <Phone size={18} />
      {label}
    </a>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  link,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {link} <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}
export function HospitalStory({
  institutional = false,
}: {
  institutional?: boolean;
}) {
  return (
    <section className="section surface">
      <div className="wrap story-layout">
        <div>
          <span className="eyebrow">NUESTRO HOSPITAL</span>
          <h2>
            Parte de tu comunidad.
            <br />
            Cerca de tu salud.
          </h2>
          <p className="lead">
            Más de 15 años formando parte de la atención médica en Rincón de
            Romos.
          </p>
          <Link
            className="text-link"
            href={institutional ? "/medicos" : "/hospital"}
          >
            {institutional
              ? "Conoce a los especialistas"
              : "Conoce Hospital SMI"}{" "}
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="story-facts">
          <Image
            className="story-photo"
            src="/images/hospital/recepcion-principal.webp"
            alt="Recepción principal de Hospital SMI"
            width={1448}
            height={1086}
            sizes="(max-width: 760px) 90vw, 560px"
          />
          <div className="year-fact">
            <strong>2010</strong>
            <span>Presencia en Rincón de Romos</span>
          </div>
          <p>
            Hospital SMI es un hospital privado que reúne atención hospitalaria
            y distintas especialidades para pacientes de la comunidad y
            municipios de la región.
          </p>
          <div className="fact-line">
            <Clock3 size={22} />
            <span>Hospital abierto las 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function CapacitySection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section capacity">
      <div className="wrap capacity-layout">
        <div>
          <span className="eyebrow">ATENCIÓN HOSPITALARIA</span>
          <h2>
            Atención médica,
            <br />
            quirúrgica y obstétrica.
          </h2>
          <p>
            Hospital SMI cuenta con autorización sanitaria para realizar actos
            quirúrgicos y obstétricos. Consulta disponibilidad y requisitos
            directamente con el hospital.
          </p>
          {showLink && (
            <Link className="text-link" href="/servicios">
              Conocer la atención hospitalaria <ArrowRight size={18} />
            </Link>
          )}
        </div>
        <div className="capacity-details">
          <span className="eyebrow">CAPACIDAD AUTORIZADA</span>
          <Link href="/cirugia">
            <span>
              Actos quirúrgicos
              <small>Valoración y atención por el especialista</small>
            </span>
            <ArrowUpRight />
          </Link>
          <Link href="/ginecologia-obstetricia">
            <span>
              Actos obstétricos
              <small>Consulta disponibilidad con el hospital</small>
            </span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function VisitChecklist() {
  return (
    <ol className="checklist">
      {[
        [
          "Confirma tu atención",
          "Consulta la disponibilidad y el horario del especialista antes de acudir.",
        ],
        [
          "Prepara tu visita",
          "Pregunta por los requisitos específicos para tu consulta o procedimiento.",
        ],
        [
          "Revisa tu cobertura",
          "Si utilizarás un seguro, consulta las condiciones de tu póliza y las autorizaciones necesarias.",
        ],
      ].map(([title, copy]) => (
        <li key={title}>
          <Check size={20} />
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
export function LocationSection({
  withPhoto = false,
}: {
  withPhoto?: boolean;
}) {
  return (
    <section className="section">
      <div className="wrap location-layout">
        <div>
          {withPhoto && (
            <Image
              className="location-photo"
              src="/images/hospital/acceso.webp"
              alt="Acceso a Hospital SMI con el letrero institucional"
              width={1448}
              height={1086}
              sizes="(max-width: 760px) 90vw, 560px"
            />
          )}
          <span className="eyebrow">CONTACTO Y UBICACIÓN</span>
          <h2>
            Estamos en
            <br />
            Rincón de Romos.
          </h2>
          <p>
            Encuentra Hospital SMI y comunícate directamente para preparar tu
            visita.
          </p>
          <a className="phone-link" href={`tel:${hospital.phoneHref}`}>
            <Phone size={23} />
            {hospital.phone}
          </a>
        </div>
        <div className="location-card">
          <MapPin size={30} strokeWidth={1.5} />
          <h3>Hospital SMI</h3>
          <address>
            16 de Septiembre 122
            <br />
            Guadalupe / El Chaveño
            <br />
            C.P. 20405 · Rincón de Romos, Aguascalientes
          </address>
          <a
            className="button button-dark"
            href={hospital.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir en Google Maps <ArrowUpRight size={18} />
          </a>
          <span className="hours">
            <i className="live-dot" />
            Hospital abierto 24 horas
          </span>
        </div>
      </div>
    </section>
  );
}
export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="wrap">
        <div>
          <h2>El siguiente paso empieza aquí.</h2>
          <p>
            Consulta horarios y disponibilidad directamente con Hospital SMI.
          </p>
        </div>
        <CallButton label={hospital.phone} light />
      </div>
    </section>
  );
}

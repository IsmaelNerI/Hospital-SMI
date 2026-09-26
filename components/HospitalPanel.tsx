import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";
// The institutional photo is supplied locally; the information panel remains a fallback.
export function HospitalPanel({
  image,
}: {
  image?: { src: string; alt: string };
}) {
  if (image) {
    return (
      <figure className="hospital-photo-panel">
        <div className="hero-photo-frame">
          <Image
            src={image.src}
            alt={image.alt}
            width={1448}
            height={1086}
            sizes="(max-width: 760px) 100vw, 600px"
            preload
            className="hero-hospital-photo"
          />
          <span className="photo-hours">
            <i className="live-dot" /> Abierto 24 horas
          </span>
        </div>
        <figcaption>
          <div>
            <span className="eyebrow">HOSPITAL SMI · RINCÓN DE ROMOS</span>
            <b>16 de Septiembre 122</b>
            <span>Guadalupe / El Chaveño, Aguascalientes</span>
          </div>
          <a
            href={hospital.mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Cómo llegar a Hospital SMI en Google Maps"
          >
            <ArrowUpRight size={24} />
          </a>
        </figcaption>
      </figure>
    );
  }
  return (
    <aside
      className={`hospital-panel ${image ? "with-photo" : ""}`}
      aria-label="Hospital SMI, ubicación y contacto"
    >
      <div className="panel-content">
        <div className="panel-top">
          <span className="panel-wordmark">
            Hospital <b>SMI</b>
          </span>
          <span className="panel-label">RINCÓN DE ROMOS</span>
        </div>
        <div className="panel-hours">
          <Clock3 size={30} strokeWidth={1.4} />
          <div>
            <strong>24 horas</strong>
            <span>Hospital abierto todos los días</span>
          </div>
        </div>
        <div className="panel-address">
          <MapPin size={22} />
          <div>
            <b>16 de Septiembre 122</b>
            <p>
              Guadalupe / El Chaveño
              <br />
              20405 Rincón de Romos, Ags.
            </p>
          </div>
        </div>
        <a
          className="panel-link"
          href={hospital.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Cómo llegar <ArrowUpRight size={20} />
        </a>
        <a className="panel-phone" href={`tel:${hospital.phoneHref}`}>
          <Phone size={18} /> {hospital.phone}
          <span>Contacto directo</span>
        </a>
      </div>
    </aside>
  );
}

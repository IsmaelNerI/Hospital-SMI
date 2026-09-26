import Link from "next/link";
import Image from "next/image";
import { hospital } from "@/data/hospital";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Hospital SMI, inicio">
            <Image
              src="/brand/hospital-smi-official.png"
              alt="Hospital SMI"
              width={145}
              height={97}
            />
          </Link>
          <p>Atención médica en Rincón de Romos y la región.</p>
          <a className="footer-phone" href={`tel:${hospital.phoneHref}`}>
            {hospital.phone}
          </a>
        </div>
        <div>
          <h3>Hospital</h3>
          <Link href="/hospital">Nuestro hospital</Link>
          <Link href="/hospital/instalaciones">Instalaciones</Link>
          <Link href="/servicios">Atención hospitalaria</Link>
          <Link href="/especialidades">Especialidades</Link>
          <Link href="/medicos">Directorio médico</Link>
        </div>
        <div>
          <h3>Pacientes</h3>
          <Link href="/pacientes">Antes de tu visita</Link>
          <Link href="/seguros-convenios">Seguros y convenios</Link>
          <Link href="/contacto">Contacto y ubicación</Link>
        </div>
        <div className="footer-address">
          <h3>Visítanos</h3>
          <address>
            16 de Septiembre 122
            <br />
            Guadalupe / El Chaveño
            <br />
            20405 Rincón de Romos, Ags.
          </address>
          <a href={hospital.mapUrl} target="_blank" rel="noreferrer">
            Cómo llegar ↗
          </a>
          <span className="hours">
            <i className="live-dot" />
            Abierto 24 horas
          </span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Hospital SMI S.A. de C.V.</span>
        <span>Diseño y desarrollo · CreHado Digital</span>
      </div>
    </footer>
  );
}

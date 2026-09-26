import Link from "next/link";
import { MapPin, Phone, Stethoscope } from "lucide-react";
import { hospital } from "@/data/hospital";

export function ActionBar() {
  return (
    <nav className="action-bar" aria-label="Acciones rápidas">
      <a href={`tel:${hospital.phoneHref}`}>
        <Phone size={18} />
        <span>Llamar</span>
      </a>
      <Link href="/contacto">
        <MapPin size={18} />
        <span>Ubicación</span>
      </Link>
      <Link href="/medicos">
        <Stethoscope size={18} />
        <span>Médicos</span>
      </Link>
    </nav>
  );
}

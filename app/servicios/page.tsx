import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight, Clock3, Stethoscope } from "lucide-react";
import { institutionalServices } from "@/data/hospital";
import { CapacitySection, FinalCta } from "@/components/Sections";
export const metadata = pageMetadata(
  "Atención hospitalaria",
  "Atención médica y capacidad quirúrgica y obstétrica autorizada de Hospital SMI.",
  "/servicios",
);
export default function Page() {
  return (
    <>
      <InnerPage
        eyebrow="SERVICIOS"
        title="Atención médica con respaldo hospitalario."
        intro="Hospital privado en Rincón de Romos. Comunícate con nuestro equipo para conocer la disponibilidad y los requisitos de atención."
      />
      <section className="section">
        <div className="wrap service-grid">
          {institutionalServices
            .filter((s) => s.status === "confirmed")
            .map((s, i) => (
              <Link
                className="service-card"
                href={i < 2 ? "/contacto" : s.href}
                key={s.name}
              >
                {i === 1 ? <Clock3 size={28} /> : <Stethoscope size={28} />}
                <h2>{s.name}</h2>
                <span className="text-link">
                  {i < 2 ? "Contacto y ubicación" : "Conoce más"}
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
        </div>
      </section>
      <CapacitySection showLink={false} />
      <FinalCta />
    </>
  );
}

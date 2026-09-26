import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import {
  VisitChecklist,
  LocationSection,
  CallButton,
} from "@/components/Sections";
export const metadata = pageMetadata(
  "Información para pacientes",
  "Prepara tu visita a Hospital SMI: horarios, disponibilidad, requisitos y ubicación.",
  "/pacientes",
);
export default function Page() {
  return (
    <>
      <InnerPage
        variant="patient"
        eyebrow="PACIENTES Y FAMILIAS"
        title="Prepara tu visita con tranquilidad."
        intro="Antes de acudir, confirma los detalles de tu atención directamente con el hospital."
      />
      <section className="section">
        <div className="wrap detail-layout">
          <div>
            <span className="eyebrow">ANTES DE ACUDIR</span>
            <h2>Lo que necesitas consultar.</h2>
            <VisitChecklist />
          </div>
          <aside className="appointment-card">
            <h2>Estamos para orientarte.</h2>
            <p>
              Comunícate con Hospital SMI para consultar horarios del
              especialista, disponibilidad y requisitos.
            </p>
            <CallButton label="Consultar por teléfono" />
          </aside>
        </div>
      </section>
      <LocationSection />
    </>
  );
}

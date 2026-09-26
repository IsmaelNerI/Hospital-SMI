import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import { LocationSection, CallButton } from "@/components/Sections";
export const metadata = pageMetadata(
  "Contacto y ubicación",
  "Hospital SMI: 465 851 4729. 16 de Septiembre 122, Rincón de Romos, Aguascalientes.",
  "/contacto",
);
export default function Page() {
  return (
    <>
      <InnerPage
        variant="patient"
        eyebrow="CONTACTO"
        title="Comunícate con Hospital SMI."
        intro="Consulta horarios de especialistas, disponibilidad y requisitos para tu visita."
      />
      <LocationSection withPhoto />
      <section className="contact-note surface">
        <div className="wrap">
          <h2>Hospital abierto 24 horas.</h2>
          <p>
            Para conocer la disponibilidad de la atención que necesitas, llama
            directamente al hospital.
          </p>
          <CallButton />
        </div>
      </section>
    </>
  );
}

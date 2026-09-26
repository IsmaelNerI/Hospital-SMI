import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import { DoctorCard } from "@/components/DoctorCard";
import { publicDoctors } from "@/data/hospital";
import { CallButton, FinalCta } from "@/components/Sections";
export const metadata = pageMetadata(
  "Atención quirúrgica",
  "Información sobre atención quirúrgica y valoración por especialista en Hospital SMI.",
  "/cirugia",
);
export default function Page() {
  return (
    <>
      <InnerPage
        variant="institution"
        eyebrow="CIRUGÍA"
        title="El primer paso es una valoración médica."
        intro="Hospital SMI cuenta con autorización sanitaria para realizar actos quirúrgicos."
      />
      <section className="section">
        <div className="wrap detail-layout">
          <div>
            <span className="eyebrow">ATENCIÓN QUIRÚRGICA</span>
            <h2>Orientación para tu atención.</h2>
            <p className="lead">
              Los procedimientos quirúrgicos se determinan de acuerdo con la
              valoración médica y disponibilidad del especialista.
            </p>
            <p>
              Consulta con el hospital los requisitos y la programación
              correspondiente a tu caso.
            </p>
            <CallButton label="Solicitar información" />
          </div>
          <aside className="related-panel">
            <h2>Cirugía General</h2>
            {publicDoctors
              .filter((d) => d.specialty.includes("Cirugía General"))
              .map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
          </aside>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

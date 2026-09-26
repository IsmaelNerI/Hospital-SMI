import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import { CallButton, FinalCta } from "@/components/Sections";
export const metadata = pageMetadata(
  "Seguros y convenios",
  "Consulta cobertura, autorizaciones y condiciones de tu póliza para tu atención en Hospital SMI.",
  "/seguros-convenios",
);
export default function Page() {
  return (
    <>
      <InnerPage
        variant="patient"
        eyebrow="SEGUROS Y CONVENIOS"
        title="Conoce las condiciones de tu cobertura."
        intro="Consulta con Hospital SMI y tu aseguradora las condiciones de cobertura, autorización y disponibilidad aplicables a tu póliza."
      />
      <section className="section">
        <div className="wrap detail-layout">
          <div>
            <span className="eyebrow">ANTES DE TU ATENCIÓN</span>
            <h2>Confirma cada detalle.</h2>
            <ol className="steps">
              <li>
                <h3>Con tu aseguradora</h3>
                <p>
                  Pregunta si tu póliza contempla la atención que necesitas y
                  qué autorizaciones requiere.
                </p>
              </li>
              <li>
                <h3>Con Hospital SMI</h3>
                <p>
                  Consulta la cobertura aplicable y los requisitos para tu
                  atención antes de acudir.
                </p>
              </li>
            </ol>
          </div>
          <aside className="appointment-card">
            <h2>Consulta por teléfono.</h2>
            <p>
              Ten a la mano el nombre de tu aseguradora y la información de tu
              póliza.
            </p>
            <CallButton label="Consultar por teléfono" />
          </aside>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

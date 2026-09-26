import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import { DoctorDirectory } from "@/components/DoctorDirectory";
import { publicDoctors, publicSpecialties } from "@/data/hospital";
import { FinalCta } from "@/components/Sections";
export const metadata = pageMetadata(
  "Directorio médico",
  "Encuentra especialistas vinculados con Hospital SMI y consulta sus áreas profesionales.",
  "/medicos",
);
export default function Page() {
  return (
    <>
      <InnerPage
        eyebrow="DIRECTORIO MÉDICO"
        title="Encuentra a tu especialista."
        intro="Busca por nombre o especialidad. Consulta horarios y disponibilidad directamente con Hospital SMI."
      />
      <section className="section">
        <div className="wrap">
          <DoctorDirectory
            doctors={publicDoctors}
            specialties={publicSpecialties}
          />
        </div>
      </section>
      <FinalCta />
    </>
  );
}

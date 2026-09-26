import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { publicSpecialties } from "@/data/hospital";
import { FinalCta } from "@/components/Sections";
export const metadata = pageMetadata(
  "Especialidades médicas",
  "Conoce las especialidades y médicos vinculados con Hospital SMI en Rincón de Romos.",
  "/especialidades",
);
export default function Page() {
  return (
    <>
      <InnerPage
        eyebrow="ESPECIALIDADES"
        title="Encuentra tu especialidad."
        intro="Conoce las áreas de atención médica y a los especialistas vinculados con Hospital SMI."
      />
      <section className="section">
        <div className="wrap specialty-grid">
          {publicSpecialties.map((s) => (
            <SpecialtyCard key={s.slug} specialty={s} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

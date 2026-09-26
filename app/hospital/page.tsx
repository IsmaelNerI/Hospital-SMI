import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
import {
  HospitalStory,
  CapacitySection,
  LocationSection,
  FinalCta,
} from "@/components/Sections";
export const metadata = pageMetadata(
  "Nuestro hospital",
  "Hospital privado en Rincón de Romos, con presencia desde 2010 y atención hospitalaria las 24 horas.",
  "/hospital",
);
export default function Page() {
  return (
    <>
      <InnerPage
        variant="institution"
        eyebrow="HOSPITAL SMI"
        title="Un hospital que forma parte de tu comunidad."
        intro="Servicios Médicos Integrados. Atención hospitalaria y especialidades médicas en Rincón de Romos, Aguascalientes."
      />
      <HospitalStory institutional />
      <CapacitySection />
      <LocationSection />
      <FinalCta />
    </>
  );
}

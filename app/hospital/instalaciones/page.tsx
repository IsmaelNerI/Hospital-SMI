import { InnerPage } from "@/components/InnerPage";
import { HospitalGallery } from "@/components/HospitalGallery";
import { FinalCta } from "@/components/Sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Instalaciones",
  "Conoce la entrada, recepción y áreas interiores de Hospital SMI en Rincón de Romos.",
  "/hospital/instalaciones",
);
export default function Page() {
  return (
    <>
      <InnerPage
        eyebrow="NUESTRO HOSPITAL"
        title="Conoce Hospital SMI antes de tu visita."
        intro="Un recorrido por nuestra entrada, recepción y áreas interiores en Rincón de Romos, Aguascalientes."
      />
      <HospitalGallery />
      <FinalCta />
    </>
  );
}

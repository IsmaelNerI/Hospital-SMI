import { SpecialtyDetail } from "@/components/SpecialtyDetail";
import { publicSpecialties } from "@/data/hospital";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Ginecología y Obstetricia",
  "Hospital SMI cuenta con autorización para realizar actos obstétricos. Para conocer la disponibilidad de atención obstétrica y servicios relacionados, comunícate directamente con el hospital.",
  "/ginecologia-obstetricia",
);
export default function Page() {
  return (
    <SpecialtyDetail
      specialty={publicSpecialties.find(
        (s) => s.slug === "ginecologia-obstetricia",
      )!}
      title="Ginecología y Obstetricia"
      description="Hospital SMI cuenta con autorización para realizar actos obstétricos. Para conocer la disponibilidad de atención obstétrica y servicios relacionados, comunícate directamente con el hospital."
    />
  );
}

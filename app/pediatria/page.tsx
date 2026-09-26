import { SpecialtyDetail } from "@/components/SpecialtyDetail";
import { publicSpecialties } from "@/data/hospital";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Atención para cada etapa de la infancia",
  "Atención médica especializada para niñas, niños y adolescentes. Conoce a los pediatras vinculados con Hospital SMI.",
  "/pediatria",
);
export default function Page() {
  return (
    <SpecialtyDetail
      specialty={publicSpecialties.find((s) => s.slug === "pediatria")!}
      title="Atención para cada etapa de la infancia."
      description="Atención médica especializada para niñas, niños y adolescentes. Conoce a los pediatras vinculados con Hospital SMI."
    />
  );
}

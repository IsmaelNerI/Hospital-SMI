import { notFound } from "next/navigation";
import { SpecialtyDetail } from "@/components/SpecialtyDetail";
import { publicSpecialties } from "@/data/hospital";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return publicSpecialties.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = publicSpecialties.find((s) => s.slug === slug);
  return specialty
    ? pageMetadata(
        specialty.name,
        specialty.description,
        `/especialidades/${slug}`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = publicSpecialties.find((s) => s.slug === slug);
  if (!specialty) notFound();
  return <SpecialtyDetail specialty={specialty} />;
}

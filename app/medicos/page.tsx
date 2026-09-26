import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { DoctorCard } from "@/components/DoctorCard";
import { publicDoctors } from "@/data/hospital";

export const metadata: Metadata = { title: "Directorio médico", description: "Conoce a los médicos vinculados con Hospital SMI en Rincón de Romos." };

export default function DoctorsPage() {
  return <InnerPage eyebrow="Directorio médico" title="Conoce a nuestros especialistas" intro="Perfiles médicos vinculados públicamente con Hospital SMI. Consulta disponibilidad y horarios directamente con el hospital."><section className="section"><div className="wrap"><div className="doctor-grid">{publicDoctors.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor}/>)}</div><p className="fine-print">Los horarios, credenciales y disponibilidad se confirman directamente con cada especialista. No se muestran fotografías de archivo ni datos de agenda no verificados.</p></div></section></InnerPage>;
}

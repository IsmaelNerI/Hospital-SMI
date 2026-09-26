import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = { title: "Hospital SMI", description: "Conoce Hospital SMI, hospital general privado en Rincón de Romos, Aguascalientes." };
export default function HospitalPage() { return <InnerPage eyebrow="Hospital SMI" title="Un hospital en nuestra comunidad" intro="Hospital SMI es un hospital general privado en Rincón de Romos, Aguascalientes, con trayectoria registrada desde 2010."><section className="section"><div className="wrap two-column-content"><div><span className="micro-label">SERVICIOS MÉDICOS INTEGRADOS</span><h2 className="detail-heading">Atención cercana,<br/><em>información clara.</em></h2></div><div><p>Hospital SMI reúne atención hospitalaria y especialidades médicas vinculadas para pacientes de Rincón de Romos y la región. Este sitio presenta información sustentada y medios directos para resolver dudas.</p><p>La información sobre instalaciones, disponibilidad y servicios se actualiza conforme el hospital la confirma.</p><Link className="text-link" href="/hospital/historia">Conoce nuestra trayectoria <ArrowRight size={16}/></Link></div></div></section></InnerPage>; }

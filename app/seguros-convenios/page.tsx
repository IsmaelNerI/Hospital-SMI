import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";
import { hospital } from "@/data/hospital";

export const metadata: Metadata = { title: "Seguros y convenios", description: "Información para consultar cobertura y autorizaciones de seguros con Hospital SMI." };
export default function InsurancePage() { return <InnerPage eyebrow="Pacientes · Seguros y convenios" title="Consulta tu cobertura antes de tu visita" intro="La cobertura, disponibilidad y autorización dependen de cada póliza y deben confirmarse directamente con el hospital y la aseguradora."><section className="section"><div className="wrap two-column-content"><div><span className="micro-label">SEGUROS Y CONVENIOS</span><h2 className="detail-heading">Cada póliza<br/>tiene sus <em>condiciones.</em></h2></div><div><p>Antes de acudir, verifica con tu aseguradora si tu póliza contempla la atención requerida y si necesita autorización previa. Después confirma con Hospital SMI la cobertura aplicable y la disponibilidad correspondiente.</p><p>No publicamos logotipos ni una lista de compañías como convenios vigentes sin confirmación directa del hospital.</p><a className="button button-dark" href={`tel:${hospital.phoneHref}`}><Phone size={16}/> Consultar información <ArrowUpRight size={15}/></a></div></div></section></InnerPage>; }

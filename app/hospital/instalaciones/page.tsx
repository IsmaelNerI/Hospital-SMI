import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = { title: "Instalaciones", description: "Información de instalaciones de Hospital SMI, pendiente de actualización institucional." };
export default function FacilitiesPage() { return <InnerPage eyebrow="Hospital · Instalaciones" title="Instalaciones de Hospital SMI" intro="Estamos preparando esta sección con información y fotografías proporcionadas directamente por el hospital."><section className="section"><div className="wrap"><div className="note-panel"><span className="micro-label">INFORMACIÓN EN ACTUALIZACIÓN</span><h2>Queremos mostrar espacios reales.</h2><p>La información específica sobre áreas y equipamiento se publicará cuando sea confirmada por el hospital. Para resolver una duda sobre instalaciones, comunícate con recepción.</p></div></div></section></InnerPage>; }

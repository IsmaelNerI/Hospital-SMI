import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = { title: "Historia y trayectoria", description: "Trayectoria registrada de Hospital SMI en Rincón de Romos desde 2010." };
export default function HistoryPage() { return <InnerPage eyebrow="Hospital · Historia" title="Una trayectoria en Rincón de Romos" intro="Hospital SMI cuenta con registro del establecimiento desde 2010."><section className="section"><div className="wrap timeline"><div className="timeline-year">2010</div><div><span className="micro-label">REGISTRO DEL ESTABLECIMIENTO</span><h2 className="detail-heading">Hospital SMI inicia su<br/><em>trayectoria registrada.</em></h2><p>La información pública disponible registra la operación del establecimiento en Rincón de Romos desde 2010. No se incorporan hitos, nombres o relatos institucionales sin confirmación directa del hospital.</p></div></div></section></InnerPage>; }

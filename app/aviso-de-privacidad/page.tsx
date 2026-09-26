import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = { title: "Aviso de privacidad", description: "Aviso de privacidad de Hospital SMI." };
export default function PrivacyPage() { return <InnerPage eyebrow="Aviso de privacidad" title="Aviso de privacidad" intro="La versión institucional de este documento está pendiente de confirmación y publicación por parte de Hospital SMI."><section className="section"><div className="wrap"><div className="note-panel"><span className="micro-label">DOCUMENTO INSTITUCIONAL</span><h2>Información en actualización.</h2><p>Este sitio no solicita datos personales de pacientes mediante formularios. El aviso integral, responsable de tratamiento y medios para ejercer derechos ARCO se publicarán después de recibir el documento oficial del hospital.</p></div></div></section></InnerPage>; }

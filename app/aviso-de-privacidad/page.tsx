import { InnerPage } from "@/components/InnerPage";
import { CallButton } from "@/components/Sections";
export const metadata = {
  title: "Información de privacidad",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <InnerPage
      eyebrow="PRIVACIDAD"
      title="Información de privacidad"
      intro="Para solicitar el aviso de privacidad y consultar sobre el tratamiento de tus datos, comunícate directamente con Hospital SMI."
    >
      <section className="section">
        <div className="wrap">
          <CallButton label="Contactar al hospital" />
        </div>
      </section>
    </InnerPage>
  );
}

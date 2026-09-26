import { notFound } from "next/navigation";
export const metadata = {
  title: "Instalaciones",
  robots: { index: false, follow: false },
};
// Publish only when approved institutional photography and information are available.
export default function Page() {
  notFound();
}

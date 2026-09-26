import Link from "next/link";
export function InnerPage({
  eyebrow,
  title,
  intro,
  variant = "standard",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  variant?: "standard" | "institution" | "patient";
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className={`inner-hero ${variant}`}>
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </nav>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
        </div>
      </section>
      {children}
    </>
  );
}

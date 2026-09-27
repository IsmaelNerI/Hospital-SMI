import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hospitalPhotos } from "@/data/hospital-photos";
export function HospitalGallery({ preview = false }: { preview?: boolean }) {
  const photos = preview
    ? [hospitalPhotos[1], hospitalPhotos[2], hospitalPhotos[5]]
    : hospitalPhotos;
  return (
    <section className="section hospital-gallery">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CONOCE EL HOSPITAL</span>
            <h2>Un vistazo a Hospital SMI.</h2>
            <p>
              Entrada, recepción y áreas interiores de nuestro hospital en
              Rincón de Romos.
            </p>
          </div>
          {preview && (
            <Link className="text-link" href="/hospital/instalaciones">
              Ver las instalaciones <ArrowRight size={18} />
            </Link>
          )}
        </div>
        <div className={preview ? "gallery-preview" : "gallery-grid"}>
          {photos.map((photo) => (
            <figure className="gallery-item" key={photo.src}>
              <a
                className="gallery-image"
                href={photo.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver fotografía completa: ${photo.title}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={
                    preview
                      ? "(max-width: 760px) 90vw, 60vw"
                      : "(max-width: 760px) 90vw, 45vw"
                  }
                />
              </a>
              <figcaption>
                <span>{photo.category}</span>
                <h3>{photo.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

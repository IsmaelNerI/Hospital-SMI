import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doctor } from "@/data/hospital";
export function DoctorIdentity({ doctor }: { doctor: Doctor }) {
  return doctor.image ? (
    <span
      className={`doctor-photo-frame ${doctor.imageCrop ? `doctor-photo-${doctor.imageCrop}` : ""}`}
    >
      <Image
        unoptimized={doctor.imageCrop === "artwork-portrait"}
        className="doctor-photo"
        src={doctor.image}
        alt={doctor.name}
        width={160}
        height={160}
        sizes="(max-width: 760px) 88px, 144px"
      />
    </span>
  ) : (
    <span className="doctor-avatar" aria-hidden="true">
      {doctor.initials}
    </span>
  );
}
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="doctor-card">
      <DoctorIdentity doctor={doctor} />
      <div className="doctor-meta">
        <span className="doctor-specialty">{doctor.specialty}</span>
        <h3>
          <Link href={`/medicos/${doctor.slug}`}>{doctor.name}</Link>
        </h3>
        <p>{doctor.areas.join(" · ")}</p>
        <Link className="text-link" href={`/medicos/${doctor.slug}`}>
          Ver perfil <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

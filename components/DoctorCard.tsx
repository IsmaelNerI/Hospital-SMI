import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doctor } from "@/data/hospital";
export function DoctorIdentity({ doctor }: { doctor: Doctor }) {
  return doctor.image ? (
    <span className="doctor-photo-frame">
      <Image
        className="doctor-photo"
        style={{ objectPosition: doctor.imagePosition ?? "50% 35%" }}
        src={doctor.image}
        alt={doctor.name}
        fill
        sizes="(max-width: 760px) 160px, 220px"
      />
    </span>
  ) : (
    <span className="doctor-avatar" aria-hidden="true">
      {doctor.initials}
    </span>
  );
}
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const license = doctor.licenses.find(
    (l) =>
      l.published && l.verification === "verified" && l.type === "specialty",
  );
  return (
    <article className="doctor-card">
      <DoctorIdentity doctor={doctor} />
      <div className="doctor-meta">
        <span className="doctor-specialty">{doctor.specialty}</span>
        <h3>
          <Link href={`/medicos/${doctor.slug}`}>{doctor.name}</Link>
        </h3>
        {license && (
          <p className="doctor-license">
            Cédula de especialidad <span>{license.number}</span>
          </p>
        )}
        <Link className="text-link" href={`/medicos/${doctor.slug}`}>
          Ver perfil <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

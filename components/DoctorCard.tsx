import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doctor } from "@/data/hospital";
export function DoctorIdentity({ doctor }: { doctor: Doctor }) {
  return doctor.image ? (
    <Image
      className="doctor-avatar"
      src={doctor.image}
      alt={doctor.name}
      width={64}
      height={64}
    />
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

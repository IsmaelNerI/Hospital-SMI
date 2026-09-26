"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { DoctorCard } from "./DoctorCard";
import type { Doctor, Specialty } from "@/data/hospital";
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export function DoctorDirectory({
  doctors,
  specialties,
}: {
  doctors: Doctor[];
  specialties: Specialty[];
}) {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const matches = doctors.filter(
    (d) =>
      normalize(`${d.name} ${d.specialty} ${d.areas.join(" ")}`).includes(
        normalize(query),
      ) &&
      (!specialty || d.specialty.includes(specialty)),
  );
  return (
    <>
      <div className="directory-filters">
        <div>
          <label htmlFor="doctor-search">Buscar un médico</label>
          <div className="search-field">
            <Search size={20} />
            <input
              id="doctor-search"
              type="search"
              placeholder="Nombre o especialidad"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="specialty-filter">Especialidad</label>
          <select
            id="specialty-filter"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Todas las especialidades</option>
            {specialties.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="results-count" role="status">
        {matches.length}{" "}
        {matches.length === 1 ? "especialista" : "especialistas"}
      </p>
      <div className="doctor-grid">
        {matches.map((d) => (
          <DoctorCard key={d.slug} doctor={d} />
        ))}
      </div>
      {!matches.length && (
        <div className="empty-state">
          <h2>No encontramos coincidencias.</h2>
          <p>Prueba con otro nombre o selecciona todas las especialidades.</p>
          <button
            className="button button-outline"
            onClick={() => {
              setQuery("");
              setSpecialty("");
            }}
          >
            Restablecer búsqueda
          </button>
        </div>
      )}
    </>
  );
}

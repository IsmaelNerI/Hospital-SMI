export type VerificationStatus =
  "confirmed" | "specialist_confirmed" | "pending_verification" | "disabled";

export type Specialty = {
  slug: string;
  name: string;
  description: string;
  status: VerificationStatus;
  published: boolean;
};

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  initials: string;
  status: VerificationStatus;
  image: string | null;
  imageCrop?: "artwork-portrait";
  areas: string[];
  schedule: string | null;
};

export const hospital = {
  name: "Hospital SMI S.A. de C.V.",
  shortName: "Hospital SMI",
  phone: "465 851 4729",
  phoneHref: "+524658514729",
  address: "16 de Septiembre 122, Guadalupe / El Chaveño",
  city: "Rincón de Romos, Aguascalientes",
  postalCode: "20405",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Hospital+SMI+16+de+Septiembre+122+Rinc%C3%B3n+de+Romos+Aguascalientes",
  hoursLabel: "Hospital abierto 24 horas",
  registeredSince: 2010,
};

export const specialties: Specialty[] = [
  {
    slug: "medicina-interna",
    name: "Medicina Interna",
    description:
      "Valoración médica para personas adultas y orientación sobre su atención.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "pediatria",
    name: "Pediatría",
    description:
      "Atención médica especializada para niñas, niños y adolescentes.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "ginecologia-obstetricia",
    name: "Ginecología y Obstetricia",
    description: "Consulta especializada en salud ginecológica y obstétrica.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "urologia",
    name: "Urología",
    description: "Valoración especializada en salud urológica.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "oftalmologia",
    name: "Oftalmología",
    description: "Consulta especializada para la salud visual y ocular.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "cirugia-general",
    name: "Cirugía General",
    description: "Valoración por especialista en cirugía general.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "coloproctologia",
    name: "Coloproctología",
    description: "Consulta especializada en salud de colon, recto y ano.",
    status: "specialist_confirmed",
    published: true,
  },
  {
    slug: "geriatria-gerontologia",
    name: "Geriatría y Gerontología",
    description: "Atención especializada para personas mayores.",
    status: "specialist_confirmed",
    published: true,
  },
];

export const doctors: Doctor[] = [
  {
    slug: "ignacio-arturo-mendez-anguiano",
    name: "Dr. Ignacio Arturo Méndez Anguiano",
    specialty: "Pediatría",
    initials: "IM",
    status: "specialist_confirmed",
    image: "/images/doctors/ignacio-arturo-mendez-anguiano-edited.webp",
    areas: ["Pediatría", "Crecimiento y desarrollo", "Nutrición infantil"],
    schedule: null,
  },
  {
    slug: "jose-efrain-macias-macias",
    name: "Dr. José Efraín Macías Macías",
    specialty: "Pediatría",
    initials: "JM",
    status: "specialist_confirmed",
    image: "/images/doctors/jose-efrain-macias-macias.webp",
    areas: ["Pediatría"],
    schedule: null,
  },
  {
    slug: "juan-ricardo-mendez-arteaga",
    name: "Dr. Juan Ricardo Méndez Arteaga",
    specialty: "Urología",
    initials: "JM",
    status: "specialist_confirmed",
    image: "/images/doctors/juan-ricardo-mendez-arteaga.webp",
    areas: ["Urología", "Endourología", "Urología oncológica"],
    schedule: null,
  },
  {
    slug: "baltazar-bertaud-mier",
    name: "Dr. Baltazar Bertaud Mier",
    specialty: "Oftalmología",
    initials: "BB",
    status: "specialist_confirmed",
    image: "/images/doctors/baltazar-bertaud-mier.webp",
    areas: ["Oftalmología"],
    schedule: null,
  },
  {
    slug: "atena-gutierrez-perez",
    name: "Dra. Atena Gutiérrez Pérez",
    specialty: "Cirugía General · Coloproctología",
    initials: "AG",
    status: "specialist_confirmed",
    image: "/images/doctors/atena-gutierrez-perez.webp",
    imageCrop: "artwork-portrait",
    areas: ["Cirugía General", "Coloproctología"],
    schedule: null,
  },
  {
    slug: "alfonso-garcia-diosdado",
    name: "Dr. Alfonso García Diosdado",
    specialty: "Geriatría y Gerontología",
    initials: "AG",
    status: "specialist_confirmed",
    image: "/images/doctors/alfonso-garcia-diosdado.webp",
    areas: ["Geriatría", "Gerontología"],
    schedule: null,
  },
  {
    slug: "sergio-ruiz-lopez",
    name: "Dr. Sergio Ruiz López",
    specialty: "Medicina Interna",
    initials: "SR",
    status: "specialist_confirmed",
    image: "/images/doctors/sergio-ruiz-lopez-edited.webp",
    areas: ["Medicina Interna"],
    schedule: null,
  },
  {
    slug: "juan-francisco-martinez-tavarez",
    name: "Dr. Juan Francisco Martínez Tavarez",
    specialty: "Medicina Interna · Medicina General",
    initials: "JM",
    status: "specialist_confirmed",
    image: "/images/doctors/juan-francisco-martinez-tavarez.webp",
    areas: ["Medicina Interna", "Medicina General"],
    schedule: null,
  },
  {
    slug: "jose-raul-montes-mejia",
    name: "Dr. José Raúl Montes Mejía",
    specialty: "Ginecología y Obstetricia",
    initials: "JM",
    status: "specialist_confirmed",
    image: null,
    areas: ["Ginecología y Obstetricia"],
    schedule: null,
  },
  {
    slug: "erick-muro-sanchez",
    name: "Dr. Erick Muro Sánchez",
    specialty: "Ginecología y Obstetricia",
    initials: "EM",
    status: "pending_verification",
    image: null,
    areas: [],
    schedule: null,
  },
  {
    slug: "fernando-moreno-lujano",
    name: "Dr. Fernando Moreno Lujano",
    specialty: "Pendiente de confirmar",
    initials: "FM",
    status: "pending_verification",
    image: null,
    areas: [],
    schedule: null,
  },
];

export const publicDoctors = doctors.filter(
  (doctor) =>
    doctor.status === "confirmed" || doctor.status === "specialist_confirmed",
);
export const publicSpecialties = specialties.filter(
  (specialty) =>
    specialty.published &&
    (specialty.status === "confirmed" ||
      specialty.status === "specialist_confirmed"),
);

export const institutionalServices = [
  {
    name: "Hospital privado",
    status: "confirmed" as const,
    href: "/servicios",
  },
  {
    name: "Hospital abierto 24 horas",
    status: "confirmed" as const,
    href: "/servicios",
  },
  {
    name: "Actos quirúrgicos autorizados",
    status: "confirmed" as const,
    href: "/cirugia",
  },
  {
    name: "Actos obstétricos autorizados",
    status: "confirmed" as const,
    href: "/ginecologia-obstetricia",
  },
];

export const pendingServices = [
  {
    name: "Urgencias 24/7",
    status: "pending_verification" as const,
    published: false,
  },
  {
    name: "UCI y terapia intensiva",
    status: "pending_verification" as const,
    published: false,
  },
  {
    name: "Imagenología, laboratorio y farmacia",
    status: "pending_verification" as const,
    published: false,
  },
  {
    name: "Ambulancia y banco de sangre",
    status: "pending_verification" as const,
    published: false,
  },
];

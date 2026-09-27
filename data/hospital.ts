export type VerificationStatus =
  "confirmed" | "specialist_confirmed" | "pending_verification" | "disabled";

export type Specialty = {
  slug: string;
  name: string;
  description: string;
  status: VerificationStatus;
  published: boolean;
};

export type CredentialVerification = "verified" | "reported" | "pending";
export type ProfessionalLicense = {
  number: string;
  type: "medical-degree" | "specialty" | "subspecialty" | "other";
  label: string;
  verification: CredentialVerification;
  published: boolean;
  source?: string;
};
export type EducationItem = {
  title: string;
  institution?: string;
  verification: CredentialVerification;
  published: boolean;
  source?: string;
};
export type Certification = {
  name: string;
  number?: string;
  validFrom?: string;
  validUntil?: string;
  verification: CredentialVerification;
  published: boolean;
  source?: string;
};
export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  initials: string;
  status: VerificationStatus;
  image: string | null;
  imagePosition?: string;
  licenses: ProfessionalLicense[];
  education?: EducationItem[];
  certifications?: Certification[];
  experience?: EducationItem[];
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
    image: null,
    areas: ["Pediatría", "Crecimiento y desarrollo", "Nutrición infantil"],
    schedule: null,
    licenses: [
      {
        number: "3794025",
        type: "medical-degree",
        label: "Médico Cirujano",
        verification: "verified",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/pediatra/ignacio-arturo-mendez-anguiano",
      },
      {
        number: "5643374",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/pediatra/ignacio-arturo-mendez-anguiano",
      },
    ],
    education: [
      {
        title: "Medicina General",
        institution: "Universidad Autónoma de Zacatecas",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/pediatra/ignacio-arturo-mendez-anguiano",
      },
      {
        title: "Postgrado en Pediatría",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/pediatra/ignacio-arturo-mendez-anguiano",
      },
    ],
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
    imagePosition: "50% 30%",
    licenses: [
      {
        number: "10037475",
        type: "medical-degree",
        label: "Médico General",
        verification: "verified",
        published: true,
        source:
          "https://www.doctoralia.com.mx/jose-efrain-macias-macias/pediatra/rincon-de-romos",
      },
      {
        number: "12287522",
        type: "specialty",
        label: "Pediatría",
        verification: "verified",
        published: true,
        source:
          "https://www.doctoralia.com.mx/jose-efrain-macias-macias/pediatra/rincon-de-romos",
      },
    ],
    education: [
      {
        title: "Medicina General",
        institution: "Universidad Autónoma de Aguascalientes",
        verification: "reported",
        published: true,
        source:
          "https://www.doctoralia.com.mx/jose-efrain-macias-macias/pediatra/rincon-de-romos",
      },
      {
        title: "Pediatría Médica",
        institution: "Centenario Hospital Miguel Hidalgo",
        verification: "reported",
        published: true,
        source:
          "https://www.doctoralia.com.mx/jose-efrain-macias-macias/pediatra/rincon-de-romos",
      },
    ],
    certifications: [
      {
        name: "Consejo Mexicano de Pediatría",
        verification: "reported",
        published: true,
        source:
          "https://www.doctoralia.com.mx/jose-efrain-macias-macias/pediatra/rincon-de-romos",
      },
    ],
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
    imagePosition: "50% 30%",
    licenses: [
      {
        number: "7575362",
        type: "medical-degree",
        label: "Médico Cirujano",
        verification: "verified",
        published: true,
        source: "https://www.urologoenaguascalientes.com/",
      },
      {
        number: "10954715",
        type: "specialty",
        label: "Urología",
        verification: "verified",
        published: true,
        source: "https://www.urologoenaguascalientes.com/",
      },
    ],
    education: [
      {
        title: "Médico Cirujano",
        institution: "Universidad Autónoma de San Luis Potosí",
        verification: "reported",
        published: true,
        source: "https://www.urologoenaguascalientes.com/",
      },
      {
        title: "Urología",
        institution: "Centro Médico Nacional Siglo XXI",
        verification: "reported",
        published: true,
        source: "https://www.urologoenaguascalientes.com/",
      },
    ],
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
    imagePosition: "50% 30%",
    licenses: [
      {
        number: "8308939",
        type: "medical-degree",
        label: "Médico Cirujano",
        verification: "verified",
        published: true,
        source: "https://drbertaudmier.com/",
      },
      {
        number: "10738871",
        type: "specialty",
        label: "Oftalmología",
        verification: "verified",
        published: true,
        source: "https://drbertaudmier.com/",
      },
    ],
    education: [
      {
        title: "Médico Cirujano",
        institution: "Universidad Autónoma de Aguascalientes",
        verification: "reported",
        published: true,
        source: "https://drbertaudmier.com/",
      },
      {
        title: "Cirujano Oftalmólogo",
        institution: "Centro Médico Nacional de Occidente",
        verification: "reported",
        published: true,
        source: "https://drbertaudmier.com/",
      },
    ],
    certifications: [
      {
        name: "Consejo Mexicano de Oftalmología",
        number: "3727",
        validFrom: "2022",
        validUntil: "2027",
        verification: "reported",
        published: true,
        source: "https://drbertaudmier.com/",
      },
    ],
  },
  {
    slug: "atena-gutierrez-perez",
    name: "Dra. Atena Gutiérrez Pérez",
    specialty: "Cirugía General · Coloproctología",
    initials: "AG",
    status: "specialist_confirmed",
    image: null,
    areas: ["Cirugía General", "Coloproctología"],
    schedule: null,
    licenses: [
      {
        number: "11535717",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/atena-gutierrez-perez",
      },
      {
        number: "11306387",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/atena-gutierrez-perez",
      },
      {
        number: "7741581",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/atena-gutierrez-perez",
      },
    ],
    education: [
      {
        title: "Médico Cirujano",
        institution: "Universidad Autónoma de Aguascalientes",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/atena-gutierrez-perez",
      },
      {
        title: "Cirugía General",
        institution: "Hospital Civil de Tepic Antonio González Guevara",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/atena-gutierrez-perez",
      },
      {
        title: "Coloproctología",
        institution: "Hospital General de México",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/atena-gutierrez-perez",
      },
    ],
    certifications: [
      {
        name: "Certificado CONACEM",
        number: "557",
        validFrom: "2023-03-01",
        validUntil: "2029-02-28",
        verification: "reported",
        published: true,
        source: "https://www.ags.gob.mx/turismo/medico/indexEN.html",
      },
    ],
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
    imagePosition: "50% 30%",
    licenses: [
      {
        number: "11762105",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/alfonso-garcia-diosdado",
      },
      {
        number: "14070070",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/alfonso-garcia-diosdado",
      },
    ],
    education: [
      {
        title: "Médico Cirujano",
        institution: "Universidad Autónoma de Aguascalientes",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/alfonso-garcia-diosdado",
      },
      {
        title: "Geriatría",
        institution: "Universidad Autónoma de San Luis Potosí",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/alfonso-garcia-diosdado",
      },
      {
        title: "Rotación internacional",
        institution:
          "Intellectus, Centro de Memoria y Cognición · Hospital Universitario San Ignacio, Pontificia Universidad Javeriana · Bogotá, Colombia",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/alfonso-garcia-diosdado",
      },
    ],
  },
  {
    slug: "sergio-ruiz-lopez",
    name: "Dr. Sergio Ruiz López",
    specialty: "Medicina Interna",
    initials: "SR",
    status: "specialist_confirmed",
    image: null,
    areas: ["Medicina Interna"],
    schedule: null,
    licenses: [
      {
        number: "10176211",
        type: "medical-degree",
        label: "Médico General",
        verification: "verified",
        published: true,
        source: "https://agsmedico.com/medicina-interna/sergio-ruiz-lopez",
      },
      {
        number: "12498935",
        type: "specialty",
        label: "Medicina Interna",
        verification: "verified",
        published: true,
        source: "https://agsmedico.com/medicina-interna/sergio-ruiz-lopez",
      },
    ],
    education: [
      {
        title: "Medicina General",
        institution: "Universidad Autónoma del Estado de Hidalgo",
        verification: "reported",
        published: true,
        source: "https://agsmedico.com/medicina-interna/sergio-ruiz-lopez",
      },
      {
        title: "Medicina Interna",
        institution: "Universidad de Guanajuato",
        verification: "reported",
        published: true,
        source: "https://agsmedico.com/medicina-interna/sergio-ruiz-lopez",
      },
    ],
    experience: [
      {
        title: "Experiencia profesional",
        institution: "UMAE No. 1 del IMSS · León, Guanajuato",
        verification: "reported",
        published: true,
        source: "https://www.doctoralia.com.mx/perfil/sergio-ruiz-lopez",
      },
    ],
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
    imagePosition: "50% 30%",
    licenses: [
      {
        number: "9370866",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/internista/juan-francisco-martinez-tavarez",
      },
      {
        number: "12317992",
        type: "other",
        label: "Cédula profesional",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/internista/juan-francisco-martinez-tavarez",
      },
    ],
    education: [
      {
        title: "Formación académica",
        institution: "Universidad Autónoma de Aguascalientes",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/internista/juan-francisco-martinez-tavarez",
      },
      {
        title: "Formación académica",
        institution: "Universidad de Guanajuato",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/internista/juan-francisco-martinez-tavarez",
      },
      {
        title: "Formación académica",
        institution:
          "UMAE Hospital de Especialidades No. 1, Centro Médico Nacional del Bajío",
        verification: "reported",
        published: true,
        source:
          "https://mx.mivademecum.com/medicos/internista/juan-francisco-martinez-tavarez",
      },
    ],
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
    imagePosition: "50% 30%",
    licenses: [
      {
        number: "4598482",
        type: "medical-degree",
        label: "Cédula profesional",
        verification: "verified",
        published: true,
        source: "https://agsmedico.com/ginecologia/montesmejia",
      },
      {
        number: "6938094",
        type: "specialty",
        label: "Ginecología y Obstetricia",
        verification: "verified",
        published: true,
        source: "https://agsmedico.com/ginecologia/montesmejia",
      },
    ],
    education: [],
  },
  {
    slug: "erick-muro-sanchez",
    name: "Dr. Erick Muro Sánchez",
    specialty: "Ginecología y Obstetricia",
    initials: "EM",
    status: "pending_verification",
    image: null,
    licenses: [],
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
    licenses: [],
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

// Safe public projection: evidence URLs stay in the server-owned source records.
export function publicDoctorData(doctor: Doctor): Doctor {
  const visible = <
    T extends {
      published: boolean;
      verification: CredentialVerification;
      source?: string;
    },
  >(
    items: T[] = [],
  ) =>
    items
      .filter((item) => item.published && item.verification !== "pending")
      .map((item) => {
        const clean = { ...item };
        delete clean.source;
        return clean;
      });
  return {
    ...doctor,
    licenses: visible(doctor.licenses),
    education: visible(doctor.education),
    certifications: visible(doctor.certifications),
    experience: visible(doctor.experience),
  };
}

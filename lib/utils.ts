import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const certificaciones = [
  {
    id: "1",
    title: "Certificación ISO 9001: Sistemas de Gestión de la Calidad",
    href: "/certificaciones/1",
    description:
      "Acredita la capacidad de una organización para proporcionar productos y servicios que cumplen con los requisitos del cliente y la normativa aplicable.",
    content: `
      <div class="space-y-6 text-gray-700">
        <p>
          La <strong>ISO 9001</strong> establece los criterios para un sistema
          de gestión de la calidad. Se centra en la satisfacción del cliente,
          procesos eficientes y mejora continua.
        </p>

        <h3 class="text-lg font-semibold text-gray-900">Beneficios:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Mejora la eficiencia operativa y la calidad del servicio.</li>
          <li>Aumenta la confianza de los clientes y partes interesadas.</li>
          <li>Reduce costos mediante la optimización de procesos.</li>
        </ul>

        <h3 class="text-lg font-semibold text-gray-900">
          Proceso de certificación:
        </h3>
        <ol class="list-decimal list-inside space-y-2">
          <li>Evaluación inicial del sistema de gestión.</li>
          <li>Implementación de mejoras y controles.</li>
          <li>Auditoría de certificación por un organismo acreditado.</li>
        </ol>

        <p class="italic">
          Cumple con los requisitos de calidad exigidos por organismos
          internacionales y fortalece la reputación corporativa.
        </p>
      </div>
    `,
    image: "/calidad.jpg",
  },
  {
    id: "2",
    title: "Certificación ISO 14001: Sistemas de Gestión Ambiental",
    href: "/certificaciones/2",
    description:
      "Garantiza la implementación de prácticas sostenibles y el control de los impactos ambientales derivados de las actividades de la organización.",
    content: `
      <div class="space-y-6 text-gray-700">
        <p>
          La <strong>ISO 14001</strong> proporciona un marco para gestionar las
          responsabilidades ambientales de manera sistemática, contribuyendo a
          la sostenibilidad.
        </p>

        <h3 class="text-lg font-semibold text-gray-900">Beneficios:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Minimiza los impactos ambientales negativos.</li>
          <li>Mejora la eficiencia en el uso de recursos naturales.</li>
          <li>
            Demuestra compromiso con la responsabilidad ambiental ante clientes
            y autoridades.
          </li>
        </ul>

        <h3 class="text-lg font-semibold text-gray-900">
          Proceso de certificación:
        </h3>
        <ol class="list-decimal list-inside space-y-2">
          <li>Identificación de aspectos e impactos ambientales.</li>
          <li>Desarrollo de políticas y objetivos ambientales.</li>
          <li>Auditoría externa y emisión de la certificación.</li>
        </ol>

        <p class="italic">
          Ideal para empresas que buscan operar de manera sostenible y cumplir
          con regulaciones ambientales.
        </p>
      </div>
    `,
    image: "/calidad.jpg",
  },
  {
    id: "3",
    title: "Certificación ISO 45001: Seguridad y Salud en el Trabajo",
    href: "/certificaciones/3",
    description:
      "Establece un marco para gestionar riesgos laborales, mejorar la seguridad y reducir accidentes en el entorno de trabajo.",
    content: `
      <div class="space-y-6 text-gray-700">
        <p>
          La <strong>ISO 45001</strong> ayuda a las organizaciones a reducir los
          riesgos laborales y crear lugares de trabajo más seguros.
        </p>

        <h3 class="text-lg font-semibold text-gray-900">Beneficios:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Previene accidentes y enfermedades laborales.</li>
          <li>Fomenta la cultura de seguridad y bienestar.</li>
          <li>
            Cumple con los requisitos legales y mejora la reputación corporativa.
          </li>
        </ul>

        <h3 class="text-lg font-semibold text-gray-900">
          Proceso de certificación:
        </h3>
        <ol class="list-decimal list-inside space-y-2">
          <li>Evaluación de riesgos y oportunidades en seguridad.</li>
          <li>Implementación de controles y programas preventivos.</li>
          <li>Auditoría de cumplimiento y certificación.</li>
        </ol>

        <p class="italic">
          Ideal para empresas comprometidas con el bienestar de sus trabajadores
          y la mejora continua.
        </p>
      </div>
    `,
    image: "/calidad.jpg",
  },
];

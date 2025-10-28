import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const certificaciones = [
  {
    id: "1",
    title:
      "Certificación ISO 27001: Sistemas de Gestión de la Seguridad de la Información",
    href: "/certificaciones/1",
    description:
      "La certificación ISO 27001 garantiza que una organización gestiona de forma segura la información confidencial, minimizando riesgos de ciberataques, fugas de datos y brechas de cumplimiento normativo.",
    content: `
      <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed sm:p-4">
  <figure class="w-full overflow-hidden rounded-3xl shadow-lg">
    <img
      src="/ISO27001.png"
      alt="ISO 27001"
      class="w-full h-72 md:h-[500px] object-cover object-top"
    />
  </figure>
        <header class="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-primary-color dark:text-secondary-light-color">
            ¿Qué es la ISO 27001?
          </h2>
          <p>
            La <strong>ISO 27001</strong> es un estándar internacional que define los requisitos para
            implementar un <strong>Sistema de Gestión de Seguridad de la Información (SGSI)</strong>.
            Su objetivo es proteger la confidencialidad, integridad y disponibilidad de la información mediante un enfoque de gestión basado en riesgos.
          </p>
        </header>

        <article class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Objetivos principales</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Proteger activos de información frente a amenazas internas y externas.</li>
              <li>Garantizar continuidad operativa y resiliencia organizacional.</li>
              <li>Cumplir con regulaciones internacionales de privacidad y seguridad.</li>
              <li>Fomentar una cultura corporativa de ciberseguridad.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Beneficios clave</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Reduce significativamente el riesgo de incidentes de seguridad.</li>
              <li>Incrementa la confianza de clientes y socios comerciales.</li>
              <li>Facilita el cumplimiento de normativas como <strong>GDPR</strong> y <strong>Ley 21.633</strong> en Chile.</li>
              <li>Permite integrar otros estándares como ISO 9001 e ISO 22301.</li>
            </ul>
          </div>
        </article>

        <article class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Etapas del proceso de certificación</h3>
          <ol class="list-decimal list-inside space-y-3">
            <li><strong>Diagnóstico inicial:</strong> Evaluación del estado actual de seguridad y madurez organizacional.</li>
            <li><strong>Implementación:</strong> Desarrollo de políticas, controles técnicos y procedimientos según el Anexo A.</li>
            <li><strong>Auditoría interna:</strong> Verificación del cumplimiento y eficacia del SGSI.</li>
            <li><strong>Certificación externa:</strong> Evaluación por un organismo acreditado (Ej. BSI, AENOR, SGS).</li>
          </ol>
        </article>

        <aside class="bg-gradient-to-r from-primary-color/10 to-secondary-light-color/10 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-3">
          <h3 class="text-lg font-semibold text-primary-color dark:text-secondary-light-color">
            Relevancia en el contexto actual
          </h3>
          <p>
            La Ley 21.633 en Chile y la clasificación de Operadores de Importancia Vital (OIV) exigen a las
            organizaciones adoptar marcos de seguridad robustos. La certificación ISO 27001 se ha convertido en un
            diferenciador estratégico y un requisito en licitaciones públicas y privadas.
          </p>
        </aside>

        <article class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Dominios principales de la norma</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="list-disc list-inside space-y-2">
              <li>Política de seguridad</li>
              <li>Gestión de activos</li>
              <li>Control de acceso</li>
              <li>Seguridad física y ambiental</li>
            </ul>
            <ul class="list-disc list-inside space-y-2">
              <li>Criptografía y continuidad del negocio</li>
              <li>Gestión de incidentes</li>
              <li>Relación con proveedores</li>
              <li>Cumplimiento normativo</li>
            </ul>
          </div>
        </article>

        <footer class="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="italic">
            En <strong>Cyberhub</strong> acompañamos a las organizaciones durante todo el proceso de
            implementación y certificación ISO 27001, asegurando la integración con frameworks como
            <strong> NIST CSF</strong> y <strong>TISAX</strong> para una defensa digital completa.
          </p>
        </footer>
      </section>
    `,
    image: "/ISO27001.png",
  },
];

export const Soluciones = [
  {
    id: "1",
    title: "Programa de Awareness en Ciberseguridad",
    href: "/soluciones/1",
    description:
      "Capacitaciones y campañas diseñadas para fortalecer la cultura de ciberseguridad dentro de tu organización, reduciendo riesgos humanos y fomentando comportamientos seguros.",
    content: `
      <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed sm:p-4">
  <figure class="w-full overflow-hidden rounded-3xl shadow-lg">
    <img
      src="/awarenes.png"
      alt="Programa de awareness en ciberseguridad"
      class="w-full h-72 md:h-[500px] object-cover object-top"
    />
  </figure>
        <header class="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-primary-color dark:text-secondary-light-color">
            ¿En qué consiste el Programa de Awareness?
          </h2>
          <p>
            El <strong>Programa de Awareness</strong> de <strong>Cyberhub</strong> está diseñado para desarrollar una cultura organizacional de seguridad, alineando al personal con las mejores prácticas de protección de datos y respuesta ante incidentes. A través de capacitaciones interactivas, simulaciones de phishing y contenidos adaptados al contexto local, potenciamos el factor humano como la primera línea de defensa.
          </p>
        </header>

        <article class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Componentes del programa</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Evaluación del nivel de madurez y riesgos humanos.</li>
              <li>Capacitaciones interactivas personalizadas por área o rol.</li>
              <li>Simulaciones de ataques de ingeniería social (phishing, smishing, etc.).</li>
              <li>Medición de impacto y mejora continua.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Resultados esperados</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Incremento de la conciencia y responsabilidad en todos los niveles.</li>
              <li>Reducción comprobable de incidentes derivados de errores humanos.</li>
              <li>Cumplimiento con normativas de seguridad y auditorías ISO 27001.</li>
              <li>Fortalecimiento del clima organizacional y la confianza interna.</li>
            </ul>
          </div>
        </article>

        <aside class="bg-gradient-to-r from-primary-color/10 to-secondary-light-color/10 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-3">
          <h3 class="text-lg font-semibold text-primary-color dark:text-secondary-light-color">
            Valor estratégico
          </h3>
          <p>
            La gestión de ciberseguridad no solo depende de la tecnología. El 85% de los incidentes tienen origen humano.
            Nuestro enfoque human-first asegura que las políticas de seguridad se vivan como parte del ADN corporativo.
          </p>
        </aside>

        <footer class="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="italic">
            En <strong>Cyberhub</strong>, ayudamos a las organizaciones a convertir la concientización en acción, integrando seguridad, comunicación y comportamiento digital responsable.
          </p>
        </footer>
      </section>
    `,
    image: "/awarenes.png",
  },
  {
    id: "2",
    title: "Posicionamiento de Marca en Ciberseguridad",
    href: "/soluciones/2",
    description:
      "Estrategias de comunicación y branding orientadas a consolidar tu presencia como referente confiable y experto en seguridad digital.",
    content: `
          <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed sm:p-4">
  <figure class="w-full overflow-hidden rounded-3xl shadow-lg">
    <img
      src="/Posicionamiento de Marca en Ciberseguridad.png"
      alt="Posicionamiento de Marca en Ciberseguridad"
      class="w-full h-72 md:h-[500px] object-cover object-top"
    />
  </figure>
        <header class="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-primary-color dark:text-secondary-light-color">
            Potencia tu marca en el mundo digital seguro
          </h2>
          <p>
            En el contexto actual, las empresas que comunican confianza y dominio tecnológico ganan ventaja competitiva.
            Nuestro servicio de <strong>Posicionamiento de Marca</strong> combina estrategia, diseño y narrativa técnica
            para destacar tus capacidades de seguridad en un mercado cada vez más exigente.
          </p>
        </header>

        <article class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Servicios incluidos</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Diseño y desarrollo de identidad visual corporativa.</li>
              <li>Campañas de comunicación estratégica (web, redes, prensa).</li>
              <li>Gestión de reputación digital y crisis comunicacionales.</li>
              <li>Contenido técnico orientado a confianza y liderazgo.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Impacto esperado</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Mayor reconocimiento de marca en el sector tecnológico y corporativo.</li>
              <li>Generación de leads calificados mediante confianza y visibilidad.</li>
              <li>Reforzamiento del valor percibido de tus soluciones y cultura digital.</li>
            </ul>
          </div>
        </article>

        <aside class="bg-gradient-to-r from-secondary-light-color/10 to-primary-color/10 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-3">
          <h3 class="text-lg font-semibold text-secondary-light-color dark:text-primary-color">
            Estrategia + Tecnología = Confianza
          </h3>
          <p>
            Combinamos diseño, narrativa y datos para posicionar tu marca en el ecosistema digital con una voz profesional y confiable.
          </p>
        </aside>

        <footer class="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="italic">
            Con <strong>Cyberhub</strong>, tu marca no solo comunica, lidera la conversación sobre seguridad y transformación digital.
          </p>
        </footer>
      </section>
    `,
    image: "/Posicionamiento de Marca en Ciberseguridad.png",
  },
  {
    id: "3",
    title: "Estrategias y Gestión de Ciberseguridad",
    href: "/soluciones/3",
    description:
      "Asesorías y proyectos de gestión enfocados en la transformación digital, la resiliencia organizacional y el cumplimiento normativo en ciberseguridad.",
    content: `
    <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed sm:p-4">
  <figure class="w-full overflow-hidden rounded-3xl shadow-lg">
    <img
      src="/Estrategias y Gestión de Ciberseguridad.png"
      alt="Estrategias y Gestión de Ciberseguridad"
      class="w-full h-72 md:h-[500px] object-cover object-top"
    />
  </figure>
        <header class="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-primary-color dark:text-secondary-light-color">
            Estrategia, gobierno y madurez cibernética
          </h2>
          <p>
            Nuestro servicio de <strong>Estrategia y Gestión</strong> acompaña a las organizaciones en el diseño e implementación de planes maestros de ciberseguridad,
            alineados con estándares como <strong>NIST CSF</strong>, <strong>ISO 27001</strong> y <strong>CMMI</strong>.
          </p>
        </header>

        <article class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Áreas de enfoque</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Evaluación de madurez y roadmap de seguridad.</li>
              <li>Diseño de políticas y modelos de gobierno.</li>
              <li>Implementación de frameworks y gestión de riesgos.</li>
              <li>Definición de roles, responsabilidades y KPIs.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Beneficios organizacionales</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Fortalece la gobernanza corporativa en materia de seguridad.</li>
              <li>Mejora la toma de decisiones basada en riesgos y métricas.</li>
              <li>Facilita la obtención de certificaciones internacionales.</li>
            </ul>
          </div>
        </article>

        <aside class="bg-gradient-to-r from-primary-color/10 to-secondary-light-color/10 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-3">
          <h3 class="text-lg font-semibold text-primary-color dark:text-secondary-light-color">
            Acompañamiento experto
          </h3>
          <p>
            Nuestros consultores trabajan codo a codo con tu equipo, garantizando un modelo de gestión sostenible que evoluciona junto con tus operaciones.
          </p>
        </aside>

        <footer class="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="italic">
            En <strong>Cyberhub</strong>, creemos que una buena estrategia es la base de una defensa sólida.
            No solo implementamos seguridad: ayudamos a gobernarla.
          </p>
        </footer>
      </section>
    `,
    image: "/Estrategias y Gestión de Ciberseguridad.png",
  },
];

export const toSlug = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD") // separa caracteres base + acento
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""); // limpia guiones extremos

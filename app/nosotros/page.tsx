import Image from "next/image";
import React from "react";

const team = [
  {
    name: "Juan Sanchez",
    role: "Fundador & Director Técnico",
    image: "/user.jpg",
  },
  {
    name: "Camila Rodríguez",
    role: "Líder de Marketing Digital",
    image: "/user.jpg",
  },
  {
    name: "Andrés Fuentes",
    role: "Desarrollador Full Stack",
    image: "/user.jpg",
  },
  {
    name: "Valentina Herrera",
    role: "Diseñadora UX/UI",
    image: "/user.jpg",
  },
];

const values = [
  {
    title: "Innovación constante",
    description:
      "Buscamos nuevas formas de resolver desafíos digitales, integrando tecnología y creatividad.",
  },
  {
    title: "Transparencia y confianza",
    description:
      "Creemos en relaciones a largo plazo basadas en la honestidad, la comunicación y los resultados.",
  },
  {
    title: "Colaboración",
    description:
      "Cada proyecto es una construcción conjunta con nuestros clientes y partners estratégicos.",
  },
  {
    title: "Excelencia técnica",
    description:
      "Nos esforzamos por entregar soluciones sólidas, seguras y escalables, con estándares de clase mundial.",
  },
];

const NosotrosPage = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-light-color/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Impulsamos la transformación digital de tu negocio
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            En Cyberhub creemos que la tecnología no solo debe resolver
            problemas, sino también potenciar el crecimiento y la innovación.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-secondary-color text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light-color transition-all"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </section>

      {/* 🏛 Nuestra Historia */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Nuestra historia</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cyberhub nació con la visión de conectar empresas y tecnología a
            través de soluciones digitales inteligentes. Desde nuestros inicios,
            hemos acompañado a startups y corporaciones en su evolución digital,
            ayudándolas a crecer de forma sostenible, segura y eficiente.
          </p>
        </div>
      </section>

      {/* 💡 Nuestros Valores */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Nuestros valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 border rounded-2xl bg-card hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👥 Nuestro Equipo */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Nuestro equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <Image
                  width={500}
                  height={500}
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 Llamado a la acción */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nuestro equipo está listo para diseñar contigo la próxima gran
            solución digital de tu negocio.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-secondary-color text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light-color transition-all"
          >
            Contáctanos hoy
          </a>
        </div>
      </section>
    </main>
  );
};

export default NosotrosPage;

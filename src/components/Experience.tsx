import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Desarrollador Full Stack",
    company: "Imatia",
    date: "Junio 2018 - Presente",
    description:
      "Responsable de diseñar, desarrollar e implementar aplicaciones web utilizando Spring Boot y Angular. Participé en la migración de aplicaciones monolíticas a microservicios, mejorando la escalabilidad y mantenibilidad del sistema. Trabajé con bases de datos relacionales (PostgreSQL, MySQL, MS SQL Server) y no relacionales (MongoDB). Contribuí activamente en equipos ágiles siguiendo el marco de trabajo Scrum.",
    tags: ["Spring Boot", "Angular", "PostgreSQL", "Microservicios"],
  },
  {
    role: "Bootcamp Tutor",
    company: "Campus Dual TIC",
    date: "Marzo 2023 - Presente",
    description:
      "Responsable de liderar, supervisar y apoyar a grupos de estudiantes en el desarrollo de aplicaciones utilizando Ontimize. Facilité el aprendizaje práctico en entornos colaborativos aplicando la metodología ágil Scrum.",
    tags: ["Ontimize", "Scrum", "Mentoría"],
  },
  {
    role: "Tutor",
    company: "Rockbotic",
    date: "Enero 2018 - Mayo 2018",
    description:
      "Responsable de impartir clases extraescolares de programación, robótica y diseño 3D a niños de primaria, desarrollando actividades educativas que fomentan la creatividad y el pensamiento lógico.",
    tags: ["Programación", "Robótica", "Educación"],
  },
  {
    role: "Becario de Soporte",
    company: "Universidade de Vigo",
    date: "Noviembre 2015 - Octubre 2016",
    description: "Soporte a alumnos y profesorado de la facultad de ciencias de la educación de Ourense.",
    tags: ["Soporte Técnico"],
  },
  {
    role: "Becario de Soporte",
    company: "Universidade de Vigo",
    date: "Octubre 2013 - Septiembre 2014",
    description: "Soporte a alumnos y profesorado de la facultad de ingeniería informática de Ourense.",
    tags: ["Soporte Técnico"],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ScrollReveal >
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Experiencia
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative pl-8 pb-8 border-l-2 border-gradient-to-b from-blue-500 to-purple-500 last:pb-0"
          >
            <motion.div
              className="absolute -left-3.5 top-0 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ring-4 ring-white shadow-lg"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
              className="hover:pl-4 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Building2 size={16} />
                    <span className="font-medium">{item.company}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium hover:shadow-md transition-shadow cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </ScrollReveal>
  );
};

export default Experience;
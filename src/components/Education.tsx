import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    title: "Grado en Ingeniería Informática",
    place: "Universidade de Vigo",
    date: "Septiembre 2012 - Julio 2017",
    description: "Mención en Ingeniería del Software\nMención en Tecnologías de la Información",
    icon: GraduationCap,
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Informáticas",
    place: "I.E.S San Clemente",
    date: "Septiembre 2010 - Junio 2012",
    icon: Award,
  },
  {
    title: "Técnico en Explotación de Sistemas Informáticos",
    place: "I.E.S Maximino Romero de Lema",
    date: "Septiembre 2007 - Junio 2009",
    icon: Award,
  },
];

const Education = () => {
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
        Educación
      </motion.h2>

      <div className="space-y-6">
        {education.map((edu, i) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex gap-4">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                    <Icon size={24} />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {edu.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-600 mt-1">{edu.place}</p>

                  <p className="text-xs text-gray-500 mt-1">{edu.date}</p>

                  {edu.description && (
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
    </ScrollReveal>
  );
};

export default Education;
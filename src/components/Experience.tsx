import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t("experience.fullstack.role"),
      company: t("experience.fullstack.company"),
      date: t("experience.fullstack.date"),
      description: t("experience.fullstack.description"),
      tags: ["Spring Boot", "Angular", "PostgreSQL", "Microservicios"],
    },
    {
      role: t("experience.tutor.role"),
      company: t("experience.tutor.company"),
      date: t("experience.tutor.date"),
      description: t("experience.tutor.description"),
      tags: ["Ontimize", "Scrum", "Mentoría"],
    },
    {
      role: t("experience.rockbotic.role"),
      company: t("experience.rockbotic.company"),
      date: t("experience.rockbotic.date"),
      description: t("experience.rockbotic.description"),
      tags: ["Programación", "Robótica", "Educación"],
    },
    {
      role: t("experience.support1.role"),
      company: t("experience.support1.company"),
      date: t("experience.support1.date"),
      tags: ["Soporte Técnico"],
    },
    {
      role: t("experience.support2.role"),
      company: t("experience.support2.company"),
      date: t("experience.support2.date"),
      tags: ["Soporte Técnico"],
    },
  ];
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
        {t("experience.title")}
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
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const Education = () => {
  const { t } = useTranslation();

  const education = [
    {
      title: t("education.degree1.title"),
      place: t("education.degree1.place"),
      date: t("education.degree1.date"),
      description: t("education.degree1.specialization"),
      icon: GraduationCap,
    },
    {
      title: t("education.degree2.title"),
      place: t("education.degree2.place"),
      date: t("education.degree2.date"),
      icon: Award,
    },
    {
      title: t("education.degree3.title"),
      place: t("education.degree3.place"),
      date: t("education.degree3.date"),
      icon: Award,
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
        {t("education.title")}
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
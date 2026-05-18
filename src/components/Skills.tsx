import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const { t } = useTranslation();

  const skillsData = [
    {
      category: t("skills.backend"),
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs"],
      color: "from-blue-400 to-blue-600",
      badgeColor: "bg-blue-600 text-white",
    },
    {
      category: t("skills.database"),
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
      color: "from-purple-400 to-purple-600",
      badgeColor: "bg-purple-600 text-white",
    },
    {
      category: t("skills.devops"),
      skills: ["Docker", "CI/CD", "Git", "Maven"],
      color: "from-pink-400 to-pink-600",
      badgeColor: "bg-pink-600 text-white",
    },
    {
      category: t("skills.testing"),
      skills: ["JUnit", "Mockito", "TDD", "Integration Testing"],
      color: "from-green-400 to-green-600",
      badgeColor: "bg-green-600 text-white",
    },
    {
      category: t("skills.frontend"),
      skills: ["Angular", "React", "TypeScript", "Tailwind CSS"],
      color: "from-orange-400 to-orange-600",
      badgeColor: "bg-orange-600 text-white",
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
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
        {t("skills.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            variants={categoryVariants}
            className={`p-6 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-gray-200 hover:shadow-lg transition-shadow`}
          >
            <div className={`inline-block ${category.badgeColor} px-4 py-2 rounded-lg mb-4 font-bold text-lg`}>
              {category.category}
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skillIdx}
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </ScrollReveal>
  );
}
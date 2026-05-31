import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { animationPresets } from "../utils/animations";

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
  return (
    <ScrollReveal >
      <ParallaxSection offset={40}>
        <motion.div
          variants={animationPresets.containerStagger}
          initial="hidden"
          animate="visible"
          className="card"
        >
      <motion.h2
        {...animationPresets.headingEnter}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animated bg-[length:200%_200%]"
      >
        {t("skills.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1, ease: "easeOut" }}
            className={`p-6 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 dark:bg-opacity-5 border border-white/40 dark:border-slate-700/40 hover:shadow-lg transition-all duration-300 backdrop-blur-md`}
          >
            <div className={`inline-block ${category.badgeColor} dark:${category.badgeColor.replace('bg-', 'dark:bg-')} dark:opacity-80 px-4 py-2 rounded-lg mb-4 font-bold text-lg`}>
              {category.category}
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skillIdx}
                  variants={animationPresets.tagStagger}
                  custom={skillIdx}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
        </motion.div>
      </ParallaxSection>
    </ScrollReveal>
  );
}
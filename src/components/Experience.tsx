import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Building2, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { animationPresets, commonAnimations } from "../utils/animations";

const Experience = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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

  return (
    <ScrollReveal >
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
        {t("experience.title")}
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            variants={animationPresets.itemSlideLeft}
            className="relative pl-8 pb-8 border-l-2 border-gradient-to-b from-blue-500 to-purple-500 last:pb-0 cursor-pointer"
          >
            <motion.div
              className="absolute -left-3.5 top-0 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg"
              whileHover={{ scale: 1.3 }}
              animate={expandedIndex === i ? { scale: 1.25 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />

            <motion.div
              {...commonAnimations.listItem}
              className="hover:pl-4 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-main">{item.role}</h3>
                  <div className="flex items-center gap-2 text-secondary mt-1">
                    <Building2 size={16} />
                    <span className="font-medium">{item.company}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-secondary" />
                </motion.div>
              </div>

              <div className="flex items-center gap-1 text-sm text-tertiary mb-3">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    {...animationPresets.expandCollapse}
                  >
                    <p className="text-main leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          {...animationPresets.tagStagger}
                          custom={idx}
                          className="px-3 py-1 bg-white/60 dark:bg-slate-700/60 backdrop-blur-md text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium hover:shadow-md transition-all duration-300 border border-white/40 dark:border-slate-600/40 cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </ScrollReveal>
  );
};

export default Experience;
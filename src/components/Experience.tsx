import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Building2, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { useState } from "react";
import { animationPresets, commonAnimations } from "../utils/animations";

const Experience = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  type ExperienceItem = {
    role: string;
    company: string;
    date: string;
    description?: string;
    tags?: string;
  };

  const experiences = (t("experience.items", {
    returnObjects: true,
    defaultValue: [],
  }) as ExperienceItem[]).map((item) => {
    const tags = item.tags
      ? item.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [];

    return {
      role: item.role,
      company: item.company,
      date: item.date,
      description: item.description ?? "",
      tags,
    };
  });

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
        {t("experience.title")}
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
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
                    {item.description && (
                      <p className="text-main leading-relaxed mb-4">{item.description}</p>
                    )}

                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                            whileHover={{ scale: 1.05 }}
                            className="skill-pill"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
        </motion.div>
      </ParallaxSection>
    </ScrollReveal>
  );
};

export default Experience;
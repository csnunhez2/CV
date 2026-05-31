import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { animationPresets } from "../utils/animations";

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
        {t("education.title")}
      </motion.h2>

      <div className="space-y-6">
        {education.map((edu, i) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="p-6 rounded-xl backdrop-blur-lg hover:shadow-lg transition-all duration-300 group border"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="flex gap-4">
                <motion.div
                  className="flex-shrink-0"
                  {...animationPresets.iconTilt}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center text-white shadow-md">
                    <Icon size={24} />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.title}
                  </h3>

                  <p className="text-sm font-medium text-secondary mt-1">{edu.place}</p>

                  <p className="text-xs text-tertiary mt-1">{edu.date}</p>

                  {edu.description && (
                    <p className="mt-3 text-main text-sm leading-relaxed whitespace-pre-line">
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
      </ParallaxSection>
    </ScrollReveal>
  );
};

export default Education;
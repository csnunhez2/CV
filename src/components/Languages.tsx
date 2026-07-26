import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { animationPresets } from "../utils/animations";

const Languages = () => {
  const { t } = useTranslation();

  type LanguageItem = {
    name: string;
    level: string;
  };

  const languages = (t("languages.items", {
    returnObjects: true,
    defaultValue: [],
  }) as LanguageItem[]).map((item, index) => ({
    name: item.name,
    level: item.level,
    percentage: index === 2 ? 75 : 100,
    flag: index === 0 ? "🇪🇸" : index === 1 ? "🏴" : "🇬🇧",
  }));
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
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animated bg-[length:200%_200%] flex items-center gap-3"
      >
        <Globe size={32} /> {t("languages.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="space-y-3"
          >  <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{lang.flag}</span>
                <div>
                  <p className="font-semibold text-heading">{lang.name}</p>
                  <p className="text-xs text-tertiary">{lang.level}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-main">{lang.percentage}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${lang.percentage}%` }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
        </motion.div>
      </ParallaxSection>
    </ScrollReveal>
  );
};

export default Languages;
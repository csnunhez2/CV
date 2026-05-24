import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const Languages = () => {
  const { t } = useTranslation();

  const languages = [
    {
      name: t("languages.spanish"),
      level: t("languages.native"),
      percentage: 100,
      flag: "🇪🇸",
    },
    {
      name: t("languages.galician"),
      level: t("languages.native"),
      percentage: 100,
      flag: "🏴",
    },
    {
      name: t("languages.english"),
      level: t("languages.toeic"),
      percentage: 75,
      flag: "🇬🇧",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ScrollReveal >
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="card"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animated bg-[length:200%_200%] flex items-center gap-3"
      >
        <Globe size={32} /> {t("languages.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang, i) => (
          <motion.div key={i} variants={itemVariants} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{lang.flag}</span>
                <div>
                  <p className="font-semibold text-gray-900">{lang.name}</p>
                  <p className="text-xs text-gray-500">{lang.level}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-blue-600">{lang.percentage}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 p-6 bg-white/60 backdrop-blur-lg rounded-lg border border-white/40 hover:shadow-lg transition-shadow"
      >
        <p className="text-sm text-gray-700 text-center">
          <span className="font-semibold text-blue-600">Disponible para</span> proyectos en español, gallego e inglés
        </p>
      </motion.div>
    </motion.div>
    </ScrollReveal>
  );
};

export default Languages;
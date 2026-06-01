import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1.5 rounded-lg backdrop-blur-lg border border-emerald-500/20 hover:border-emerald-500/50 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
      style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      }}
      title={`${t('header.switchTo')} ${i18n.language === "es" ? "English" : "Español"}`}
    >
      {i18n.language.toUpperCase()}
    </motion.button>
  );
};

export default LanguageSwitcher;
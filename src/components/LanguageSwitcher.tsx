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
      className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors"
      title={`${t('header.switchTo')} ${i18n.language === "es" ? "English" : "Español"}`}
    >
      {i18n.language.toUpperCase()}
    </motion.button>
  );
};

export default LanguageSwitcher;
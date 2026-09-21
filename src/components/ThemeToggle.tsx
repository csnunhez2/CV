import { motion } from "framer-motion";
import { Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Moon size={18} />;
      case 'dark':
        return <Zap size={18} />;
      case 'cyberpunk':
        return <Sun size={18} />;
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 rounded-lg backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-500/50 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
      style={{
        background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      }}
      title={t(`header.switchToTheme.${theme === 'light' ? 'dark' : theme === 'dark' ? 'cyberpunk' : 'light'}`)}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'cyberpunk' ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;


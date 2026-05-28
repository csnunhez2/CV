import { motion } from "framer-motion";
import { Code2, Mail, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollProgressBar from "./ScrollProgressBar";
import GitHubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import html2pdf from "html2pdf.js";
import { commonAnimations } from "../utils/animations";
import { useMagneticButton } from "../utils/magnetic-button";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const { t } = useTranslation();
  const downloadCV = () => {
    // Get the cv-print element
    const element = document.getElementById("cv-print");
    if (!element) return;

    // Temporarily show the element for html2pdf to capture it
    const originalDisplay = (element as HTMLElement).style.display;
    (element as HTMLElement).style.display = "block";

    const opt = {
      margin: 10,
      filename: "CV_CesarNunhez.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: "portrait" as const, unit: "mm", format: "a4" },
    };

    // Generate PDF and hide element again
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        (element as HTMLElement).style.display = originalDisplay;
      });
  };
  return (
    <>
      <ScrollProgressBar />
      <motion.header
      {...commonAnimations.header}
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-700 dark:border-slate-800 shadow-lg fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
    >
      <div className="max-w-full px-8 py-4 flex items-center justify-between">
        {/* Logo e nome */}
        <motion.div
          {...commonAnimations.logo}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <Code2 size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              César.dev
            </h1>
            <p className="text-xs text-gray-400">{t('header.softwareEngineer')}</p>
          </div>
        </motion.div>

        {/* Social links and hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop social links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://github.com/csnunhez2"
              target="_blank"
              rel="noopener noreferrer"
              {...commonAnimations.socialLink}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              title="GitHub"
            >
              <img src={GitHubIcon} alt="GitHub" className="w-5 h-5 invert" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/csnunhez/"
              target="_blank"
              rel="noopener noreferrer"
              {...commonAnimations.socialLink}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-purple-600 hover:to-purple-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              title="LinkedIn"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5 invert" />
            </motion.a>

            <motion.a
              href="mailto:cesar.santiago.nunhez@gmail.com"
              {...commonAnimations.socialLink}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-pink-600 hover:to-pink-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              title="Email"
            >
              <Mail size={18} />
            </motion.a>

            <ThemeToggle />

            <LanguageSwitcher />

            <motion.button
              onClick={downloadCV}
              {...commonAnimations.button}
              className="ml-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold hover:shadow-2xl transition-all duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
            >
              {t('header.downloadCV')}
            </motion.button>
          </div>

          {/* Mobile hamburger menu - visible only on mobile */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            title="Menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
      </motion.header>
    </>
  );
};

export default Header;
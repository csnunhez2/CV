import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  BookOpen,
  Code2,
  GraduationCap,
  Award,
  Globe,
  Mail,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import GitHubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import html2pdf from "html2pdf.js";
import { commonAnimations } from "../utils/animations";

const Sidebar = ({ current, setCurrent, onItemClick }: any) => {
  const { t } = useTranslation();

  const downloadCV = () => {
    const element = document.getElementById("cv-print");
    if (!element) return;

    const originalDisplay = (element as HTMLElement).style.display;
    (element as HTMLElement).style.display = "block";

    const opt = {
      margin: 10,
      filename: "CV_CesarNunhez.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: "portrait" as const, unit: "mm", format: "a4" },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        (element as HTMLElement).style.display = originalDisplay;
      });
  };

  const items = [
    { id: "about", label: t("sidebar.about"), icon: User },
    { id: "experience", label: t("sidebar.experience"), icon: Briefcase },
    { id: "education", label: t("sidebar.education"), icon: BookOpen },
    { id: "skills", label: t("sidebar.skills"), icon: Code2 },
    { id: "courses", label: t("sidebar.courses"), icon: GraduationCap },
    { id: "certificates", label: t("sidebar.certificates"), icon: Award },
    { id: "languages", label: t("sidebar.languages"), icon: Globe },
  ];
  return (
    <div className="h-full w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-gray-300 p-6 flex flex-col border-r border-slate-800 shadow-2xl">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          César.dev
        </h1>
        <p className="text-xs text-gray-400 mb-8">Software Engineer</p>
      </motion.div>

      <nav className="flex flex-col gap-1 overflow-y-auto flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          className="flex flex-col gap-1"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setCurrent(item.id);
                  onItemClick?.();
                }}
                className="relative px-4 py-3 rounded-lg text-left overflow-hidden group transition-all duration-300"
              >
                {current === item.id && (
                  <motion.div
                    layoutId={`active-${item.id}`}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 rounded-lg"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        current === item.id
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    />
                  </motion.div>

                  <span
                    className={`transition-colors duration-300 font-medium ${
                      current === item.id
                        ? "text-white font-semibold"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {current === item.id && (
                  <motion.div
                    layoutId={`indicator-${item.id}`}
                    className="absolute right-0 top-1/2 w-1 h-6 bg-white rounded-l-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </nav>

      <motion.div
        className="pt-6 border-t border-slate-800 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Mobile action buttons - visible only on md:hidden */}
        <div className="md:hidden flex flex-col gap-3">
          {/* Social links */}
          <div className="flex gap-2 justify-center">
            <motion.a
              href="https://github.com/csnunhez2"
              target="_blank"
              rel="noopener noreferrer"
              {...commonAnimations.socialLink}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              title="GitHub"
            >
              <img src={GitHubIcon} alt="GitHub" className="w-4 h-4 invert" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/csnunhez/"
              target="_blank"
              rel="noopener noreferrer"
              {...commonAnimations.socialLink}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-purple-600 hover:to-purple-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              title="LinkedIn"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="w-4 h-4 invert" />
            </motion.a>

            <motion.a
              href="mailto:cesar.santiago.nunhez@gmail.com"
              {...commonAnimations.socialLink}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-pink-600 hover:to-pink-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              title="Email"
            >
              <Mail size={16} />
            </motion.a>
          </div>

          {/* Theme and Language toggles */}
          <div className="flex gap-2 justify-center">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Download CV button */}
          <motion.button
            onClick={downloadCV}
            {...commonAnimations.button}
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold hover:shadow-2xl transition-all duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
          >
            {t('header.downloadCV')}
          </motion.button>
        </div>

        <p className="text-xs text-gray-400 text-center pt-4 border-t border-slate-800">
          © 2024 - <span className="text-blue-400">César.dev</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Sidebar;
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  BookOpen,
  Code2,
  GraduationCap,
  Award,
  Globe,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ current, setCurrent, onItemClick }: any) => {
  const { t } = useTranslation();

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
        <p className="text-xs text-gray-500 mb-8">Software Engineer</p>
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
        className="pt-6 border-t border-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-gray-500 text-center">
          © 2024 - <span className="text-blue-400">César.dev</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Sidebar;
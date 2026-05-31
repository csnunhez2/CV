import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { animationPresets, commonAnimations } from "../utils/animations";

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t("courses.course1"),
      platform: "Udemy",
      date: "Marzo 2026",
      link: "https://www.udemy.com/certificate/UC-226caf29-4bc3-4edc-a760-ecbf7f15b344/",
    },
    {
      title: t("courses.course2"),
      platform: "Udemy",
      date: "Noviembre 2025",
      link: "https://www.udemy.com/certificate/UC-ecb68819-17a7-48b3-b5d2-cfc05565c10d/",
    },
    {
      title: t("courses.course3"),
      platform: "Udemy",
      date: "Octubre 2025",
      link: "https://www.udemy.com/certificate/UC-78419787-272d-44ae-858d-321c88aee857/",
    },
    {
      title: t("courses.course4"),
      platform: "TrainingIT",
      date: "Marzo 2025",
      link: "https://cursos.trainingit.es/mod/customcert/verify_certificate.php?code=fvBZWKsTCf",
    },
    {
      title: t("courses.course5"),
      platform: "Udemy",
      date: "Julio 2024",
      link: "https://udemy.com/certificate/UC-b051741a-84e6-4c75-bd2b-24fa4cc2d1cc/",
    },
    {
      title: t("courses.course6"),
      platform: "Campus Dual TIC",
      date: "Noviembre 2023",
    },
    {
      title: t("courses.course7"),
      platform: "Udemy",
      date: "Junio 2022",
      link: "https://www.udemy.com/certificate/UC-c08c23e1-01b4-47e6-b4f0-60beb8652401/",
    },
    {
      title: t("courses.course8"),
      platform: "Udemy",
      date: "Mayo 2020",
      link: "https://www.udemy.com/certificate/UC-e5425079-5301-47e8-b3f4-23d56e4dcc79/",
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
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animated bg-[length:200%_200%] flex items-center gap-3"
      >
        <BookOpen size={32} /> {t("courses.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, i) => (
          <motion.a
            key={i}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            {...commonAnimations.card}
            className="group p-5 rounded-xl backdrop-blur-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-80 cursor-pointer border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
            }}
          >
            <div className="flex items-start gap-3">
              <motion.div className="flex-shrink-0 mt-1" {...animationPresets.iconTilt}>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-md">
                  <BookOpen size={20} />
                </div>
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-secondary">
                  <span className="font-medium text-orange-600 dark:text-orange-400">{course.platform}</span>
                  <span className="text-tertiary">{course.date}</span>
                </div>
              </div>

              {course.link && (
                <motion.div
                  className="flex-shrink-0 text-secondary dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  {...animationPresets.iconTilt}
                >
                  <ExternalLink size={18} />
                </motion.div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
      </ParallaxSection>
    </ScrollReveal>
  );
};

export default Courses;